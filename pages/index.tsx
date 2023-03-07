import Head from 'next/head'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>In ly hùng nguyệt</title>
        <meta name="description" content="in bao bì ly nhựa ly giấy " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className='container mx-auto sm:px-4 md:px-4'>
      <Header />
      </main> 
    </>
  )
}
