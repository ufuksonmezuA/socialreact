<<<<<<< HEAD
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";


const persistConfig = {
    key: "root",
    storage,
    blacklist: ["contentPing"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

=======
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";


const persistConfig = {
    key: "root",
    storage,
    blacklist: ["contentPing"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

>>>>>>> 4f17b334f63bbf6a2e63240889b4189164e04d8c
export { store, persistor };