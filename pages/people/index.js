import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/People.module.css';
const host = process.env.APP_URL;
export const getStaticProps = async () => {
    const response = await fetch(`${host}/api/users`);
    const data = await response.json();
    return {
        props: {
            persons: data
        }
    }
}
const People = ({ persons }) => {
    return (
        <>
            <Head>
                <title>Peoples List | People</title>
            </Head>
            <div>
                <h1>People</h1>
                {
                    persons.map(person => (
                        <Link key={person.id} href={`/people/${person.id}`}>
                            <a className={styles.single}>
                                <h3>{person.name}</h3>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default People;