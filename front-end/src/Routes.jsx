import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header";
import Ask from "./pages/Ask/Ask.jsx";
import Answer from "./pages/Answer/Answer.jsx";

export default function Routes() {
     return (
          <BrowserRouter>
               <Header />
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/ask" component={Ask} />
                    <Route exact path="/answer/:id" component={Answer} />
               </Switch>
          </BrowserRouter>
     )
}