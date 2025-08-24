import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const GET = async ({ url }) => {
    const id = url.searchParams.get('id');

    if (!id) {
        return json({ error: 'Missing id' }, { status: 400 });
    }

    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('곡 상세 조회 실패:', error.message);
        return json({ error: 'DB 조회 실패' }, { status: 500 });
    }

    return json({ data });
}