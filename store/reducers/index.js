<<<<<<< HEAD
import  {combineReducers} from 'redux';
import userReducer from './userReducer';
import contentPingReducer from './contentPingReducer';

const rootReducer = combineReducers({
    user: userReducer,
    contentPing: contentPingReducer
});

=======
import  {combineReducers} from 'redux';
import userReducer from './userReducer';
import contentPingReducer from './contentPingReducer';

const rootReducer = combineReducers({
    user: userReducer,
    contentPing: contentPingReducer
});

>>>>>>> 4f17b334f63bbf6a2e63240889b4189164e04d8c
export default rootReducer;