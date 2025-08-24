import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const GET = async ({ url }) => {
    const q = url.searchParams.get('q') || '';
    const mode = url.searchParams.get('mode') || 'list';

    if (mode === 'detail') {
        const { data, error } = await supabase
            .from('songs')
            .select('title, album, image_url')
            .eq('title', q)
            .single();

        if (error) {
            return json({ error }, { status: 500 });
        }
        return json({ data });
    }

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