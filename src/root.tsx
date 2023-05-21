import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const Root = (): JSX.Element => {
	return (
		<>
			<NavBar />
			<Container maxWidth="lg">
				<Outlet />
			</Container>
		</>
	)
}

export default Root
