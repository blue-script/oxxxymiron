import {createRoot} from "react-dom/client"
import App from "./app/App.tsx"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {store} from "./store"

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
