import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

type Song = {
    id: number;
    title: string;
    album?: string;
    image_url?: string;
    stream_url?: { spotify: { url: string; id: string } };
    duration?: string;
    created_at: string;
};

export const load: PageServerLoad = async () => {
    const { data, error } = await supabase.from('songs').select<'songs', Song>();

    if (error) {
        console.error('Error loading songs:', error.message);
        return { songs: [] };
    }

    return {
        songs: data ?? [],
    };
};