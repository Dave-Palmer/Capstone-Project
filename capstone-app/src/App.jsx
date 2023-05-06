

import './App.css'
import SidebarNav from './components/SideBar/SideBarNav';
import { AppRoutes } from './routes/AppRoutes';
import { AlertsProvider } from './context/alertsContext';
import { UserContext } from './context/userContext';
import { useContext } from 'react';



function App() {
  const { currentUser } = useContext(UserContext)

  return (

    <AlertsProvider>
      <div id="app">
        {currentUser.token && <SidebarNav />}
        <main>
          <AppRoutes />
        </main>
      </div >
    </AlertsProvider>

  );
}

export default App
