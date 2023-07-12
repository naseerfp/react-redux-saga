import {call, put ,takeEvery} from "redux-saga/effects";
import {getDataSuccess, getDataError, apiCall} from "./action/index"
export function* watcherSaga(){
    console.log("watcherSaga")
    yield takeEvery("apiCall",workerSaga)
}
function fetchData(){ 
    const users=fetch("https://jsonplaceholder.typicode.com/users");
    return users.then(res=>res.json());
    
  }

  function* workerSaga()
  {
    console.log("workerSaga")
       try{
        const users = yield call(fetchData);
        yield put(getDataSuccess(users));
       }
       catch(error)
       {
        yield put (getDataError(error))
       } 

  }