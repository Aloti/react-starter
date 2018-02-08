import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CompanyContainer from './Company/CompanyContainer'
import ClientContainer from './Client/ClientContainer'
import CompanySingle from './Company/CompanySingle'
import ClientSingle from './Client/ClientSingle'
import AddCompany from './Company/AddCompany'
import AddContact from './Client/AddContact'
import Header from './Header'
import HomeContainer from './HomeContainer'

const App = () => {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/companies' component={CompanyContainer} />
          <Route path='/companies/:id' component={CompanySingle} />
          <Route exact path='/contacts' component={ClientContainer} />
          <Route path='/contacts/:id' component={ClientSingle} />
          <Route path='/addCompany/:id' component={AddCompany} />
          <Route path='/addContact/:id' component={AddContact} />
        </Switch>
      </div>
    )
}

export default App;