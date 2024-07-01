import { combineEpics, ofType } from "redux-observable";
import { map, delay, tap, debounceTime } from "rxjs/operators";
import { increment } from "./counterSlice";

export const counterIncrementEpic = (action$: any) =>
  action$.pipe(
    // ofType(increment.type),
    // debounceTime(500),    
  );

export default combineEpics(counterIncrementEpic)