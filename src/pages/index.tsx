import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
            <h2>
              Hello World!
            </h2>
        </div>
        <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="Aashika Face"
              width={200}
              height={150}
              priority
            />
        </div>
      
      </main>
    </>
  )
}
