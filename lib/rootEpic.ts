import { combineEpics } from "redux-observable";
import catEpic from "./features/cat/catEpic";

export const rootEpic = combineEpics(catEpic);
