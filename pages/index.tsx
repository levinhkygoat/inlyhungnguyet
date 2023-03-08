import Head from 'next/head'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>In ấn hùng nguyệt</title>
        <meta name="description" content="in ly nhựa, in ly giấy, in ly trà sữa, in ly nhua gia re, in ly, in bao thư c150, in bao lì xì, in bao bì, in bao bì nhựa, in bao bì sản phẩm. in bao bì theo yêu cầu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="In ấn hùng nguyệt" />
        <meta property="og:description" content="in ly nhựa, in ly giấy, in ly trà sữa, in ly nhua gia re, in ly, in bao thư c150, in bao lì xì, in bao bì, in bao bì nhựa, in bao bì sản phẩm. in bao bì theo yêu cầu" />
        <meta property="og:URL" content="https://inanhungnguyet.com/" />
        <meta property="og:type" content="website" />
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
