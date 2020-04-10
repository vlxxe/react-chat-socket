import React, { Suspense, lazy, useEffect } from "react"
import Loader from "./components/common/Loader/Loader"
import { Route, Switch, Redirect } from "react-router-dom"

import { useSelector } from "react-redux"
import { AppStateType } from "./redux/rootReducer"

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"))
const ChatPage = lazy(() => import("./pages/ChatPage/ChatPage"))

interface IAppProps {}

const App: React.FC = (props: IAppProps) => {
  const isAuth = useSelector((state: AppStateType) => state.authStore.isAuth)

  const auth = true

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {isAuth ? (
          <>
            <Route path="/chat" component={ChatPage} />
            <Redirect path="*" to="/chat" />
          </>
        ) : (
          <>
            <Route path="/login" component={LoginPage} />
            <Redirect path="*" to="/login" />
          </>
        )}
      </Switch>
    </Suspense>
  )
}

export default App
