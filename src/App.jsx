
import { Route,Routes } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import PorContactPage from "./pages/PorContactPage"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" Component={DashboardPage}/>
        <Route path="/portofolio" Component={PorContactPage}/>
      </Routes>

    </>
  )
}

export default App
