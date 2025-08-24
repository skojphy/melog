import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const GET = async ({ url }) => {
    const title = url.searchParams.get('title');

    if (!title) {
        return json({ error: 'Missing title' }, { status: 400 });
    }

    const { data, error } = await supabase
        .from('songs')
        .select('id, title, album, image_url, stream_url, duration')
        .eq('title', title)
        .single();

    if (error) {
        console.error('곡 상세 조회 실패:', error.message);
        return json({ error: 'DB 조회 실패' }, { status: 500 });
    }

    return json({ data });
}