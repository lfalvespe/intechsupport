import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";

// css
import "./App.css"

// hooks
import useAuthContext from './hooks/useAuthContext'

// components
import Header from "./components/Header";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home/Home'
import News from "./pages/News/News";
import Scripts from './pages/Scripts/Scripts'
import Push from './pages/Push/Push'
import Tables from './pages/Tables/Tables'
import Tags from './pages/Tags/Tags'
import DocModels from "./pages/DocModels/DocModels"
import Links from './pages/Links/Links'
import Schedule from './pages/Schedule/Schedule'
import Login from "./pages/Login/Login";
import EditProfile from './pages/EditProfile/EditProfile'



const App = () => {

	const { agent, setAgent, editing, setEditing } = useAuthContext()

	console.log(agent)


	return (
		<>

			<HashRouter>
				{agent &&
					<div className="header">
						<Header />
						<Navbar />
					</div>
				}

				<Routes>
					<Route path="/" element={agent ? <Home /> : <Login />} />
					<Route path="/news" element={agent ? <News /> : <Login />} />
					<Route path="/scripts" element={agent ? <Scripts /> : <Login />} />
					<Route path="/tables" element={agent ? <Tables /> : <Login />} />
					<Route path="/tags" element={agent ? <Tags /> : <Login />} />
					<Route path="/push" element={agent ? <Push /> : <Login />} />
					<Route path="/docmodels" element={agent ? <DocModels /> : <Login />} />
					<Route path="/links" element={agent ? <Links /> : <Login />} />
					<Route path="/schedule" element={agent ? <Schedule /> : <Login />} />
					<Route path="/edit_profile" element={agent ? <EditProfile /> : <Login />} />
					<Route path="*" element={<Home />} />
				</Routes>

				{agent && <Footer /> }
			</HashRouter>
		</>
	)
}

export default App;
