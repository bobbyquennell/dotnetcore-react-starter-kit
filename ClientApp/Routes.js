import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

const Routes = ()=>{
  return (
    <Layout>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/fetchdata/:startDateIndex?" component={FetchData}/>
      </div>
    </Layout>
  );
};

export default Routes;
