import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/index.js'

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'     element={< LandingPage/>} />
            </Routes>
        </BrowserRouter>
    );
}