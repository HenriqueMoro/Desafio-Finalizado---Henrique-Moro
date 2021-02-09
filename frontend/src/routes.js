import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Index from './pages/home/home'
import Historic from "./pages/historic/index"

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/historic" component={Historic} />
        </Switch>
        
        </BrowserRouter>
    )
}