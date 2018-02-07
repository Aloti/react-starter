import { Route, Switch } from 'react-router-dom'
import React from 'react';
import CRMContainer from './CRMComponents/CRMContainer'

const Main = () => {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={CRMContainer} />
        </Switch>
      </main>
    )
  }

  export default Main