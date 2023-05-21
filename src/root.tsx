import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const Root = (): JSX.Element => {
	return (
        <>
            <NavBar />
			<Outlet />
		</>
	)
}

export default Root
