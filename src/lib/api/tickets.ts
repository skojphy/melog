import { supabase } from '$lib/supabaseClient';

export const insertTicket = async (ticket: any) => {
    const { data, error } = await supabase
        .from('tickets')
        .insert([ticket])
        .select();

    if (error) {
        console.error('insertTicket error:', error);
        throw error;
    }

    return data;
}