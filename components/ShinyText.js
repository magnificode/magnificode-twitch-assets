const ShinyText = ({ children }) => (
	<>
		<h1 className="title">{children}</h1>
		<style jsx>{`
			@keyframes shine {
				to {
					background-position: 200% center;
				}
			}
			.title {
				animation: shine 3000ms linear infinite;
				display: inline;
				color: ##E51964;
				font-size: 3rem;
				background: linear-gradient(to right, #E51964 20%, #9BDEAC 40%, #9BDEAC 60%, #E51964 80%);
				background-size: 200% auto;
				color: #000;
				background-clip: text;
				text-fill-color: transparent;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		`}</style>
	</>
);

export default ShinyText;