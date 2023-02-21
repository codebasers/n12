import "styles/globals.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	console.log(Component);
	return (
		<>
			{router.pathname && router.pathname !== "/" && (<Link href="/"><a className="homer">Home</a></Link>)}
			<Component {...pageProps} />
		</>
	);
}
