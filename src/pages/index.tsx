import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter()

    const gotoDocs = () =>  {
        console.log("You are being sent to docs page");
        router.push('docs/a-funciton/its-concepts');
    }
    return (
        <div>
        <h1 style={{
            margin: "auto",
            textAlign: 'center'
        }}>Hello world !</h1>

        <h2>Navigation:</h2>
        <div> <code>Client side</code> navigation:  <Link href={'/blog'}> Go to blog</Link> | Does not make a request to server</div>
        <div> <code>Server side</code> navigation without element from next/link:   <a href='/blog'>Go to blog</a> | Makes a request to server</div>
        <div> <code>Programmatical navigation</code> click following button to try: <button onClick={gotoDocs} >Take me deep into docs</button> | does not make request to server</div>
        
        <br/>
        
        <p>See <code>src/pages/index.tsx </code> and <code>src/pages/README.md/#NAVIGATION </code> for usage</p>
        
        <br/>
        <br/>
        <br/>

        <h3>This is SSG with static data.</h3>
        <Link href='/users'> Users -&gt; </Link>

        <h3>THis is SSG with dynamic parameters</h3>
        <Link href={'/posts'} > Posts -&gt; </Link>

        <h3> This is SSR, page pointed by link below will be rendered at runtime after the request. </h3>
        <Link href={"/news"} >News -&gt;</Link>

        <h3>API routes example: </h3>
        <Link href={"/api/v1/comments"} >Comments -&gt;</Link>

        <h3>Page with custom per page layout </h3>
        <Link href={"/profile"} >Profile -&gt;</Link>

        <h3>Page with optimized images with Image from next/image</h3>
        <Link href={"./gallery"} >Gallery -&gy;</Link>
        </div>
    )
};