import styles from '@/app/page.module.css'

async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })

    const data = await res.json();
    return data.slice(0,5);
}

async function getAlbums(){
    const res = await fetch('https://jsonplaceholder.typicode.com/albums', {
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })

    const data = await res.json();
    return data.slice(0,5);
}

export default async function Example(){

    const dataPromise = await getPosts();
    const albumsPromise = await getAlbums()

    const [data, albums] = await Promise.all([dataPromise, albumsPromise])

    return (
        <main className={styles.main}>
            <h1 key={data}>Example</h1>
            {
                data.map((post) => <h3 
                style={{border: '1px solid white', padding: '20px', margin: '10px 0px'}}  
                key={post.id}>Post: {post.title}
                </h3>)
            }
            {
                albums.map((album) => (
                    <h3 
                    style={{border: '1px solid white', padding: '20px', margin: '10px 0px'}} 
                    key={album.id}>{`Album: ${album.title}`}
                    </h3>
                ))
            }
        </main>
    )
}