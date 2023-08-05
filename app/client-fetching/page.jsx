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


export default function ClientFetching(){
    return (
    <main className={styles.main}>
        <h1>Client Fetching</h1>
        <ul style={listStyles}>
           <li style={{padding: '20px 0px'}}>
           Next JS recommends using SWR or React Query if you need to fetch data on the client.
            </li>
            <li style={{padding: '20px 0px'}}>
           These libraries will allow you to handle caching and revalidating.
            </li>
        </ul>
      </main>
    )
}