import React from 'react';

// BrowserRouter - Forma de navegacao mais utilizado 
// quando se utiliza o Browser.  
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

// Componentr
const Routes = () => {
    // exact - tem que ser exatamente o path.
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter>
    )
}

export default Routes