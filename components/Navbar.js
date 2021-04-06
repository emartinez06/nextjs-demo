import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/msd-logo.png" width={128} height={128} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/people/"><a>People</a></Link>
            <Link href="/gallery/"><a>Gallery</a></Link>
        </nav>
    )
}

export default Navbar;
