export default function Background() {
	return (
		<>
			<h1 className="starting">Stream Starting</h1>

			<style jsx>{`
				.starting {
					background-image: linear-gradient(to left, var(--pink), var(--green));
					background-clip: text;
					color: transparent;
					display: inline-block;
					-webkit-background-clip: text;
					text-fill-color: transparent;
					-webkit-fill-color: transparent;
					font-family: var(--ff);
					font-size: 4rem;
					margin: 0;
				}
			`}</style>
		</>
	)
}