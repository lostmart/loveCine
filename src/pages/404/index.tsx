import { useRouteError } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const NotFound = (): JSX.Element => {
	const error: any = useRouteError()
	console.error(error)

	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity="error">
				<i>{error.statusText || error.message}</i>
				<p>{error.data}</p>
			</Alert>
		</Stack>
	)
}

export default NotFound
