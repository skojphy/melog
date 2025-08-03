import { DOMParser } from 'xmldom';

const BASE_URL = 'https://www.maniadb.com/api/search';

export async function GET({ url }) {
    const query = url.searchParams.get('q');
    if (!query) return new Response('Missing query', { status: 400 });

    const encoded = encodeURIComponent(query);
    const fullUrl = `${BASE_URL}?q=${encoded}&sr=artist&key=example&v=0.5`;

    const res = await fetch(fullUrl);
    const xml = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    const item = doc.querySelector('channel > item');
    if (!item) return new Response(JSON.stringify(null), { status: 200 });

    const majorsongs = item.querySelector('maniadb\\:majorsongs');
    if (!majorsongs) return new Response(JSON.stringify(null), { status: 200 });

    const id = item.getAttribute('id') || '';
    const title = item.querySelector('title')?.textContent?.trim() || '';
    const image = item.querySelector('image')?.textContent?.trim() || '';

    return new Response(
        JSON.stringify({ id, title, image }),
        { headers: { 'Content-Type': 'application/json' } }
    );
}
