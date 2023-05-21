import { useRouteError } from 'react-router-dom'

const NotFound = (): JSX.Element => {
	const error: any = useRouteError()
	console.error(error)

	return (
		<div>
			<h2>Oups !!</h2>
			<i>{error.statusText || error.message}</i>
			<p>{error.data}</p>
		</div>
	)
}

export default NotFound
