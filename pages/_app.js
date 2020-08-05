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
			}

			html,
			body {
				margin: 0;
				padding: 0;
			}
		`}</style>
	</>
);

export default StreamAssetApp;