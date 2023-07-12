import { createStore, applyMiddleware } from "redux";
import userRuderce from "./reducer/index";
import createSagaMiddleware from  "redux-saga";
import { watcherSaga } from "./midSaga";

const sagaMiddleWate = createSagaMiddleware();

const store = createStore (userRuderce, applyMiddleware(sagaMiddleWate));

sagaMiddleWate.run(watcherSaga);
export default store;