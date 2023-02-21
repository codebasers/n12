import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="home">
        <h1>Next.js 12 Experiments</h1>
        <p>Primarily a diff of what works in 12 but not 13.</p>
        {/* <Link href="/bugLinkSmoothScroll">
          BUG | next/link ignores smooth scroll directive.
        </Link>
        <Link
          href="/egParallaxImage"
          style={{ textDecorationLine: "line-through" }}
        >
          EG | Parallax with next/image.
        </Link>
        <Link href="/egParallaxSmoother">
          EG | Parallax with next/image. Smoother?
        </Link> */}
        <Link href="/egRedBox">
          EG | Show a Red Box
        </Link>
      </main>
    </>
  );
}
