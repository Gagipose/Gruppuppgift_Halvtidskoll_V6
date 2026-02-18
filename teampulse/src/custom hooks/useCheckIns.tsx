import { useReducer } from "react";
import { checkInReducer } from "../reducer";
import type { CheckIn } from "../types";

const intialState: CheckIn[] = []

function useCheckIns() {
  const [action, dispatch] = useReducer(checkInReducer, initialState);

  const addCheckIn = () => {dispatch: {TYPE: }}

}