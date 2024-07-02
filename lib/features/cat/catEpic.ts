import { combineEpics, ofType } from "redux-observable";
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from "rxjs/operators";
import {
  fechCancel,
  fetchCats,
  getListFailure,
  getListSuccess,
} from "./catSlice";
import { endpoint } from "@/lib/const/config";
import { from, of } from "rxjs";
import { fromFetch } from "rxjs/fetch";

export const counterIncrementEpic = (action$: any) =>
  action$.pipe(
    ofType(fetchCats.type),
    debounceTime(500),
    tap(() => {
      console.log(fetchCats.type);
    }),
    switchMap(() => {
      return fromFetch(`${endpoint}/facts`).pipe(
        mergeMap((res) => {
          return res.ok
            ? from(res.json()).pipe(
                mergeMap((data) => of(getListSuccess(data)))
              )
            : of(getListFailure(new Error("Failed to fetch")));
        }),
        catchError((error) => of(getListFailure(error))),
        takeUntil(action$.pipe(ofType(fechCancel.type)))
      );
    })
  );

export default combineEpics(counterIncrementEpic);
