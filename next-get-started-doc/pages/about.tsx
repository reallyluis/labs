import Link from "next/link";

export default function about() {
    return (
        <>
            <h1>About</h1>
            <ul>
                <li>
                    <Link href="/post/1">
                        <a>First post</a> 
                    </Link>
                </li>
                <li>
                    <Link href="/post/2">
                        <a>Second post</a> 
                    </Link>
                </li>
            </ul>
        </>
    );
}
