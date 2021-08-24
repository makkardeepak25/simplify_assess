import React from "react";
import { Switch, Route } from "react-router-dom";
import { Qrreader } from "../Components/Qrreader";
import { Auth } from "./Auth/Auth";
import { Login } from "./Auth/Login/Login";
import { OtpReg } from "./Auth/OtpReg/OtpReg";
import { Register } from "./Auth/Register/Register";
import { Home } from "./Home/Home";
import { LogBook } from "./LogBook/LogBook";
import { EntryThanks } from "./LogBook/LogEntry/EntryThanks";
import { ExitThanks } from "./LogBook/LogEntry/ExitThanks";
import { LogEntry } from "./LogBook/LogEntry/LogEntry";
import { LogExit } from "./LogBook/LogEntry/LogExit";
import { LogHistory } from "./LogBook/LogHistory/LogHistory";

export function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/auth/register">
          <Register />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route eact path="/auth/otpauth">
          <OtpReg />
        </Route>
        <Route path="/qr">
          <Qrreader />
        </Route>
        <Route exact path="/logbook">
          <LogBook />
              </Route>
              <Route exact path="/logentry">
          <LogEntry />
              </Route>
              <Route exact path="/logexit">
          <LogExit />
              </Route>
              <Route exact path="/loghistory">
                  <LogHistory/>
        </Route>
        <Route exact path={"/entry/thanks"}><EntryThanks/> </Route>
        <Route exact path={"/exit/thanks"}><ExitThanks/> </Route>

      </Switch>
    </div>
  );
}
