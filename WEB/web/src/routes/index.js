import react from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from '../view/Home';
import Task from '../view/Task';
import Qrcode from '../view/Qrcode';

function Router() {
    return(
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/task' exact component={Task}/>
        <Route path='/task/:id' exact component={Task}/>
        <Route path='/Qrcode' exact component={Qrcode}/>

    </Switch>
    </BrowserRouter>
    )
}
export default Router;