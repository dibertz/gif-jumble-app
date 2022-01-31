const GetGifs = async (search) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=TgJHos6ob37pUugIK3Kovr1AW4zt8BXs&q=${encodeURI(search)}&limit=10`;
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(obj => {
        return {
            id: obj.id,
            title: obj.title,
            url: obj.images?.downsized_medium.url
        }
    })

    return gifs // id, title, url
}

export default GetGifs