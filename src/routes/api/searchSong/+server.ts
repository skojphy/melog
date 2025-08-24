import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function GET({ url }) {
    const q = url.searchParams.get('q') || '';
    const { data, error } = await supabase
        .from('songs')
        .select('title')
        .ilike('title', `%${q}%`)
        .limit(10);
    if (error) {
        return json({ error }, { status: 500 });
    }
    return json({ data });
}