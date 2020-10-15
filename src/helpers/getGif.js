export const getGif = async(cat) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=10&api_key=Wdb6qrdbDfUN9El7Wgv7CiQfgSyUf3o1`;

    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }
    })

    return gifs;
}