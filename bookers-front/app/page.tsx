import Image from 'next/image'
import styles from './page.module.css'
import BooksList from './bookslist'

export default function Home() {
  return (
    <main className={styles.main}>
      <BooksList />
    </main>
  )
}
