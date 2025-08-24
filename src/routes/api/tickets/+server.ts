const rateLimitMap = new Map<string, number>();
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const GET: RequestHandler = async () => {
    const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Supabase error:', error);
        return json({ error: 'Failed to fetch tickets' }, { status: 500 });
    }

    return json({ data });
};

export const POST: RequestHandler = async ({ request }) => {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const lastAccess = rateLimitMap.get(ip);
    const now = Date.now();
    const FIVE_MINUTES = 5 * 60 * 1000;

    if (lastAccess && now - lastAccess < FIVE_MINUTES) {
        const remaining = Math.ceil((FIVE_MINUTES - (now - lastAccess)) / 60000);
        return json({ error: `${remaining}분 뒤에 다시 작성할 수 있습니다.` }, { status: 429 });
    }
    rateLimitMap.set(ip, now);

    const body = await request.json();
    const { nickname, song_id, location, emotion, comment } = body;

    const { data, error } = await supabase
        .from('tickets')
        .insert([{ nickname: nickname || '🍀멜로버🍀', song_id, location, emotion, comment }])
        .select();

    if (error) {
        console.error('Supabase insert error:', error);
        return json({ error: '티켓 등록 실패' }, { status: 500 });
    }

    return json({ data });
};