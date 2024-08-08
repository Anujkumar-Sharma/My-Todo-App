import Dashboard from './pages/dashboard/Dashboard'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  )
}

export default App
