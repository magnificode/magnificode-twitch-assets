import Head from 'next/head'
import Footer from '@components/Footer'
import Welcome from '@components/Welcome';

function Home({data, followerCount, subCount}) {
	const { display_name } = data;
	return (
		<div className="container">
			<Head>
				<title>Next Starter!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Welcome display_name={display_name} followerCount={followerCount} subCount={subCount} />
			</main>

			<Footer />

			<style jsx>{`
				.container {
					height: 100vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
				}
			`}</style>
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}

export async function getStaticProps() {
	const broadcasterID = '271447331';

	const bRes = await fetch(`https://api.twitch.tv/helix/users?login=magnificode`, {
		headers: {
			'Client-ID': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_OAUTH_TOKEN}`
		}
	});
	const bData = await bRes.json();
	const data = bData.data[0];

	const fRes = await fetch(`https://api.twitch.tv/helix/users/follows?to_id=${broadcasterID}`, {
		headers: {
			'Client-ID': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_OAUTH_TOKEN}`
		}
	});
	const fData = await fRes.json();
	const followerCount = fData.total;

	const sRes = await fetch(`https://api.twitch.tv/helix/subscriptions?broadcaster_id=${broadcasterID}`, {
		headers: {
			'Client-ID': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_OAUTH_TOKEN}`
		}
	});
	const sData = await sRes.json();
	const subCount = sData.data.length - 1;

	return {
		props: {
			data,
			followerCount,
			subCount,
		}
	}
}

export default Home