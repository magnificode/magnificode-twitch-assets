function Welcome({ display_name, followerCount, subCount }) {
	return (
		<>
			<h1>Welcome {display_name} you have {followerCount} followers, and {subCount} {subCount === 1 ? 'Subscriber' : 'Subscribers'}!!</h1>
		</>
	)
}

export default Welcome;