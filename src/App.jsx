import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';

function App() {
	return (
		<div className="App max-h-screen overflow-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
