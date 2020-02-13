import { combineReducers } from 'redux'
import loginReducer from '../../features/login/loginSlice'
import formalizationMatReducer from '../../features/formalizationMat/formalizationMatSlice'
import preloaderReducer from '../../features/preloader/slice'
import storage from 'redux-persist/es/storage/session'
import { persistReducer } from 'redux-persist'
import { createNamedWrapperReducer } from '../reduxHelper'
import listReducer from '../../components/comboBox/listReducer'

// const rootPersistConfig = {
//   key: "root",
//   storage: storage,
//   blacklist: ["auth"]
// };

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['somethingTemporary']
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, loginReducer),
  formalizationMat: formalizationMatReducer,
  preloader: preloaderReducer,
  operation: createNamedWrapperReducer(listReducer, 'operation')
})

export default rootReducer // persistReducer(rootPersistConfig, rootReducer);
