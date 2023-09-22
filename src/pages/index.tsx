import Timeline from '@/components/Timeline';
import Head from 'next/head'

export default function Home() {
  return (
    <>
     <Head>
        <title>SNS Udemy</title>
        <meta name="description" content="SNS Udemyのトップページです。" />
      </Head>


      <div>
        <Timeline />
      </div>
    </>
  );
}
