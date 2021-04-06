import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const serverError = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    }, [])
    return (
        <div className={"not-found"}>
            <h1>Error on server petition</h1>
            <h2>An error ocurred, please try again</h2>
            <p><Link href="/"><a>Go Back</a></Link></p>
        </div>
    )
}

export default serverError;