import { lazy, Suspense } from "react";
import { Switch, Route ,Router} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import Home from '../pages/Home/index'
import UkToKeyna from '../pages/UkToKeyna'
import GermanyToKenya from '../pages/GermanyToKenya'
import USAToKenya from '../pages/USAToKenya'
import OnlineShopping from '../pages/OnlineShopping'
import Delivery from '../pages/Delivery'


const Routers = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/UkToKeyna' exact component={UkToKeyna} />
      <Route path='/GermanyToKenya' exact component={GermanyToKenya} />
      <Route path='/USAToKenya' exact component={USAToKenya} />
      <Route path='/OnlineShopping' exact component={OnlineShopping} />
      <Route path='/Delivery' exact component={Delivery} />

      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Routers;
