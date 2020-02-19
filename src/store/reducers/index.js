import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage/session';
import listReducer from '../../components/comboBox/listReducer';
import loginReducer from '../../features/login/loginSlice';
import preloaderReducer from '../../features/preloader/slice';
import userLevelReducer from '../../features/userLevel/slice';
import productivityReducer from '../../features/productivity/slice';
import { createNamedWrapperReducer } from '../reduxHelper';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['somethingTemporary']
};

const productivityPersistConfig = {
  key: 'productivity',
  storage: storage,
  blacklist: ['somethingTemporary']
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, loginReducer),
  preloader: preloaderReducer,
  operation: createNamedWrapperReducer(listReducer, 'operation'),
  userLevel: userLevelReducer,
  productivity: persistReducer(productivityPersistConfig, productivityReducer)
});

export default rootReducer;
