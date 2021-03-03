import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
const notFound = ()=>{
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push('/');
        },3000)
    },[])
    return (
        <div className={"not-found"}>
            <h1>Sorry, nothing is here...</h1>
            <h2>Page not found</h2>
            <p>Go back <Link href="/"><a>home</a></Link></p>
        </div>
    )
}
export default notFound;