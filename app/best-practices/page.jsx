import styles from '@/app/page.module.css'
import parallel from '../../public/parallel.png'
import Image from 'next/image'

const listStyles = {
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '80%',
    listStyleType: 'none'
}


export default function BestPractices(){
    return (
    <main className={styles.main}>
        <h1>Best Practices</h1>
        <ul style={listStyles}>
           <li style={{padding: '20px 0px'}}>
           Whenever possible, fetch data on the server
            </li>
            <li style={{padding: '20px 0px'}}>
           This allows you to have direct access to the server, keep sensitive data under wraps,
          fetch and render data in same environment reducing back and forth b/w client and server,
          etc.
            </li>
            <li style={{padding: '20px 0px'}}>
           Fetch data where it's needed, because fetch requests are automatically de-duplicated.
            </li>
            <li style={{padding: '20px 0px'}}>
           Use suspense/streaming when needed for components (see my video on loading/streaming).
            </li>
            <li style={{padding: '20px 0px'}}>
           Be aware of parallel vs sequential data fetching.
            </li>
            <li style={{padding: '20px 0px'}}>
                <div style={{padding: '20px 0px'}}>
                    In Parallel:
                </div>
                <Image
                src={parallel}
                height={800}
                alt="parallel"
                />
            </li>
        </ul>
      </main>
    )
}