import styles from '@/app/page.module.css'
import serverFetchExample from '../../public/serverFetchExample.png'
import revalidateExample from '../../public/revalidate.png'
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


export default function ServerFetching(){
    return (
    <main className={styles.main}>
        <h1>Server Fetching</h1>
        <ul style={listStyles}>
           <li style={{padding: '20px 0px'}}>
            <div style={{padding: '20px 0px'}}>
            You can use fetch with async/await in Server Components, in Route Handlers, and in Server Actions.
            </div>
            <Image
            src={serverFetchExample}
            height={500}
            alt="server-fetch"
            />
           </li>
           <li style={{padding: '20px 0px'}}>
           By default, Next JS caches the returned values from fetch() in a server data cache. So, that data can be fetched at build or request time, cached, and reused on each request.
           </li>
           <li style={{padding: '20px 0px'}}>
           Caching data is great and all, but how can you make sure your data is up to date? Well, you can revalidate data in Next JS in a time-based way or in an on-demand way.
           </li>
           <li style={{padding: '20px 0px'}}>
            <div style={{padding: '20px 0px'}}>
           To perform time-based revalidation, you can do this:
            </div>
           <Image
            src={revalidateExample}
            height={500}
            alt="revalidate example"
            />
           </li>
           <li>
           Data can be revalidated on-demand by path or by cache tag inside a Route Handler or a Server Action.
           </li>
           <li style={{padding: '20px 0px'}}>
            <div>
            By caching:
            </div>
            <Image
            src={cachingOne}
            height={175}
            alt="caching example 1"
            />
            <Image
            src={cachingTwo}
            height={500}
            alt="caching example 2"
            />
           </li>
           <li style={{padding: '20px 0px'}}>
            <div style={{padding: '20px 0px'}}>
            By route:
            </div>
            <Image
            src={onDemand}
            height={300}
            alt="caching example 1"
            />
           </li>
           <li style={{padding: '20px 0px'}}>
           If an error is thrown while attempting to revalidate data, the last successfully generated data will continue to be served from the cache.
           </li>
           <li style={{padding: '20px 0px'}}>
           {`You can opt out of caching like so: fetch("https://...", { cache: "no-store" })`}
           </li>
           <li style={{padding: '20px 0px'}}>
           {`or By: fetch("https://...", { revalidate: 0 })`}
           </li>
           <li style={{padding: '20px 0px'}}>
           {`or by: export const dynamic = 'auto' within page.js/layout.js`}
           </li>
        </ul>
      </main>
    )
}