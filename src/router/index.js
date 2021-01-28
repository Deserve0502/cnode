import React from 'react';
import Index from '../page/index';
import New from '../page/new'
import Api from '../page/api'
import About from '../page/about'
<<<<<<< HEAD
import Regist from '../page/regist'
=======
>>>>>>> 8427892 (feenan)
import Login from '../page/login'
import Detile from '../page/detile'
import User from '../page/user'
import { Provider } from 'mobx-react'
import store from '../store'
import {   Redirect, Route, BrowserRouter, Switch  } from 'react-router-dom'


export default class Routers extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from="/" to="/index"></Redirect>
                        <Route exact path='/index' component={Index} />
                        <Route path='/new' component={New} />
                        <Route path='/api' component={Api} />
                        <Route path='/about' component={About} />
<<<<<<< HEAD
                        <Route path='/regist' component={Regist} />
=======
>>>>>>> 8427892 (feenan)
                        <Route path='/login' component={Login} />
                        <Route path='/detile' component={Detile} />
                        <Route path='/user' component={User} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
