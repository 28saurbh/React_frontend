
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form.jsx'
import UserProfile from "./components/User_Profile/UserProfile"

function App() {
    return (
        <div className='h-screen'>
            <Routes>
                <Route path='form-app' element={<Form />} />
                <Route path='User-profile' element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default App;
