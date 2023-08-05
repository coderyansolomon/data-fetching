import styles from '@/app/page.module.css'
import serverFetch from '../../public/server_fetch.png'
import cachingOne from '../../public/caching_1.png'
import cachingTwo from '../../public/chaching_2.png'
import onDemand from '../../public/onDemand.png'
import Image from 'next/image'

const listStyles = {
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '80%',
    listStyleType: 'none'
}


export default function ServerFetchingWithLibrary(){
    return (
    <main className={styles.main}>
        <h1>Server Fetching With Library</h1>
        <ul style={listStyles}>
           <li style={{padding: '20px 0px'}}>
            If you use external libraries to make requests in your server components and you it doesn't use fetch(), you can configure the caching and revalidating behavior of those requests using the Route Segment Config Option and React's cache function.
            </li>
            <li style={{padding: '20px 0px'}}>
            Whether the data is cached or not will depend on whether the route segment is statically or dynamically rendered.
            </li>
           <li>
           Data can be revalidated on-demand by path or by cache tag inside a Route Handler or a Server Action.
           </li>
           <li style={{padding: '20px 0px'}}>
            <Image
            src={serverFetch}
            height={350}
            alt="caching example 1"
            />
            </li>
        </ul>
      </main>
    )
}