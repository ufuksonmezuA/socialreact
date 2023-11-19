<<<<<<< HEAD
import '@/styles/globals.css'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "../store/store";

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
    </Provider>
  )
}
=======
import '@/styles/globals.css'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "../store/store";

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
    </Provider>
  )
}
>>>>>>> 4f17b334f63bbf6a2e63240889b4189164e04d8c
