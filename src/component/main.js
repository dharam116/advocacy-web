import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Portfolio from './portfolio'
import PracticeArea from './practice-areas'
import ContactPage from './contact-us'
import AboutUs from './about-us'
import Objective from './our-objectives'
import History from './history'
import Awards from './awards'
import Services from './services'
import Referral from './referrals'
import Articles from  './articles'
import LegalUpdates from './legal-updates'
import People from './our-people'
import Search from './search'
import Profile1 from './profile1'
// import LoginPage from './login'
// import SignUp from './sign-up'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/practice-areas' component={PracticeArea} />
      <Route path='/contact-us' component={ContactPage} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/our-objectives' component={Objective} />
      <Route path='/history' component={History} />
      <Route path='/awards' component={Awards} />
      <Route path='/services' component={Services} />
      <Route path='/referrals' component={Referral} />
      <Route path='/articles' component={Articles} />
      <Route path='/legal-updates' component={LegalUpdates} />
      <Route path='/our-people' component={People} />
      <Route path='/search' component={Search} />
      <Route path='/profile1' component={Profile1} />
    </Switch>
  </main>
)

export default Main
