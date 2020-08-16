const StreamAssetApp = ({ Component, pageProps }) => (
	<>
		<Component {...pageProps} />
		<style jsx global>{`
			@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

			:root {
				--ff: 'Press Start 2P', monospace;
				--pink: #E51964;
				--purple: #946C80;
				--purple-dark: #1a1115;
				--dark-gray: #1a1a1a;
				--green: #9BDEAC;
				--mineshaft: #323232;
				--codgray: #1C1C1C;
			}

			html,
			body {
				font-family: "Press Start 2P", monospace;
				margin: 0;
				padding: 0;
			}

			* {
				box-sizing: border-box;
			}
		`}</style>
	</>
);

export default StreamAssetApp;