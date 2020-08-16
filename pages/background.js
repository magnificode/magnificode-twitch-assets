export default function Background() {
	return (
		<>
			<div className="background"></div>
			<style jsx>{`
				.background {
					background: linear-gradient(to top right, var(--mineshaft) 0%, #1a1a1a 40%, var(--codgray) 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
					background-blend-mode: multiply;
					height: 100vh;
					width: 100vw;
				}
			`}</style>
		</>
	)
}