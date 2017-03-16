 'use strict'
import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Index from './components/index.js'
import Hot from './components/hot.js'
import Vip from './components/vip.js'
import Live from './components/live.js'
import My from './components/my.js'



import '../styles/app.scss'

ReactDom.render((
	<Router history={hashHistory}>
    <Route path='/' component={Index}>
		<IndexRoute component={Hot}></IndexRoute>
		<Route path='hot' component={Hot}></Route>
		<Route path='live' component={Live}></Route>
		<Route path='vip' component={Vip}></Route>
		<Route path='my' component={My}></Route>
    </Route>
  </Router>
),document.getElementById('app'))
