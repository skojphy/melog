import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const GET = async () => {
    const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('datetime', { ascending: false });

    if (error) {
        console.error('Supabase error:', error);
        return json({ error: 'Failed to fetch tickets' }, { status: 500 });
    }

    return json({ data });
};