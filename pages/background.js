export default function Background() {
	return (
		<>
			<div className="background"></div>
			<style jsx>{`
				.background {
					background-image: radial-gradient(var(--purple-dark), var(--dark-gray));
					mix-blend-mode: multiply;
					height: 100vh;
					width: 100vw;
				}
			`}</style>
		</>
	)
}