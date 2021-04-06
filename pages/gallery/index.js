import Head from 'next/head';
import styles from '../../styles/Gallery.module.css';
// import Image from 'next/image'
const host = process.env.APP_URL;
export const getStaticProps = async () => {
    const response = await fetch(`${host}/api/albums`);
    const data = await response.json();
    return {
        props: {
            albums: data
        }
    }
}
const Gallery = ({ albums }) => {
    return (
        <>
            <Head>
                <title>Images List | Gallery</title>
            </Head>
            <div>
                <h1 className={styles.title}>Images</h1>
                <div className={styles.gallery_container}>
                    {
                        albums.map(album => (
                            <div className={styles.gallery_img}>
                                <img
                                    key={album.id}
                                    src={album.url}
                                    alt={album.title}
                                    width={75}
                                    height={75}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery;