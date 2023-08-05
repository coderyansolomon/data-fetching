import styles from './page.module.css'

const titleStyles = {margin: '20px 10px'}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={titleStyles}>There Are 3 Primary Ways To Fetch Data</h1>
      <div>
      <h3 style={titleStyles}>1) On The Server</h3>
      <h3 style={titleStyles}>2) On The Server Using 3rd Party Libraries</h3>
      <h3 style={titleStyles}>3) On The Client Using 3rd Party Libraries</h3>
      </div>
    </main>
  )
}
