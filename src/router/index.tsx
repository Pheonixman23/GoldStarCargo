import { lazy, Suspense } from "react";
import { Switch, Route ,Router} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import Home from '../pages/Home/index'
import UkToKeyna from '../pages/UkToKeyna'
import GermanyToKenya from '../pages/GermanyToKenya'
import USAToKenya from '../pages/USAToKenya'
import Blog from '../pages/Blog/Blog'

const Routers = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Blog' exact component={Blog} />
      <Route path='/GermanyToKenya' exact component={GermanyToKenya} />
      <Route path='/USAToKenya' exact component={USAToKenya} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Routers;
