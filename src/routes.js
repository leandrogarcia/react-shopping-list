import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Createaccount from './pages/Createaccount';
import Error from './pages/Error';
import Sharedlists from './pages/Sharedlists';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/sign-in' element={ <Signin /> } />
                <Route path='/create-account' element={ <Createaccount /> } />
                <Route path='/shared-lists' element={ <Sharedlists /> } />

                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;