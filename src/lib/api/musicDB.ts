import { DOMParser } from 'xmldom';

const BASE_URL = '/api/search';
const API_KEY = 'seohey@kakao.com';

export async function searchArtist(name: string) {
    const encoded = encodeURIComponent(name);
    const url = `${BASE_URL}?q=${encoded}`;

    const res = await fetch(url);
    const xml = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    const item = doc.querySelector('item');
    if (!item) return null;

    // Check if it's an artist by presence of maniadb:majorsongs
    const majorsongsElement = item.querySelector('maniadb\\:majorsongs');
    if (!majorsongsElement) {
        // Not an artist, treat as song
        const id = item.getAttribute('id') || '';
        const title = item.querySelector('title')?.textContent?.trim() || '';
        const image = item.querySelector('image')?.textContent?.trim() || '';
        const duration = item.querySelector('maniadb\\:tracklength')?.textContent?.trim() || '';

        return {
            id,
            title,
            image,
            duration,
        };
    }

    const id = item.getAttribute('id') || '';
    const link = item.querySelector('link')?.textContent?.trim() || '';
    const title = item.querySelector('title')?.textContent?.trim() || '';
    const image = item.querySelector('image')?.textContent?.trim() || '';
    const discography = item.querySelector('maniadb\\:linkdiscography')?.textContent?.trim() || '';
    const majorsongs = Array.from(item.querySelectorAll('maniadb\\:majorsongs song')).map((song) => {
        return {
            id: song.getAttribute('id') || '',
            name: song.querySelector('name')?.textContent?.trim() || '',
            shop: song.querySelector('shop')?.getAttribute('name') || '',
        };
    });

    return {
        id,
        title,
        link,
        image,
        discography,
        majorsongs,
    };
}

export const searchSong = async (name: string) => {
    const encoded = encodeURIComponent(name);
    const url = `${BASE_URL}?q=${encoded}`;

    const res = await fetch(url);
    const xml = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    const item = doc.querySelector('item');
    if (!item) return null;

    const id = item.getAttribute('id') || '';
    const title = item.querySelector('title')?.textContent?.trim() || '';
    const image = item.querySelector('image')?.textContent?.trim() || '';
    const duration = item.querySelector('maniadb\\:tracklength')?.textContent?.trim() || '';

    return {
        id,
        title,
        image,
        duration,
    };
}

export const getArtistAlbums = async (artistId: string) => {
    const url = `${BASE_URL}/artist/${artistId}/?key=${API_KEY}&v=0.5`;

    const res = await fetch(url);
    const xml = await res.text();
    return parseXml(xml);
}

function parseXml(xml: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    return doc;
}