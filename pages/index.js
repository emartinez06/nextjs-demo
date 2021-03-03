import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Peoples List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, ex pariatur Lorem ad pariatur non enim esse duis deserunt voluptate ipsum
        commodo aute duis veniam deserunt voluptate commodo culpa. Quis aute tempor anim culpa cillum labore anim
        amet velit anim ex nostrud et velit sunt laborum. Irure sint anim labore eu commodo proident sunt commodo
        esse laborum consectetur esse reprehenderit Lorem non esse qui id. Aute sint Lorem et reprehenderit eu
        duis non deserunt elit qui consectetur esse cupidatat consectetur aliqua est.</p>
        <Link href="/people/"><a className={styles.btn}>See People Listing</a></Link>
      </div>
    </>
  )
}
