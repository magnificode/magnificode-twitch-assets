const getBroadcasterData = () => {
	return fetch(`https://api.twitch.tv/helix/users?login=magnificode`, {
		headers: {
			'Client-ID': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_OAUTH_TOKEN}`
		}
	})
	.then(res => res.json())
	.then(data => console.log(data))
}

// getBroadcasterData();

// const req = `https://api.twitch.tv/helix/users?login=magnificode&${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`

export default (req, res) => {
	res.statusCode = 200
	res.json({test: "Hi"})
}