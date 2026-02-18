import { useReducer } from "react";
import { checkInReducer } from "../reducer";
import type { CheckIn } from "../types";

const intialState: CheckIn[] = []

function useCheckIns() {
  const [action, dispatch] = useReducer(checkInReducer, initialState);

  const addCheckIn = (data: Omit<CheckIn, "id" | "timestamp">) => {
    dispatch: {type: "ADD_CHECKIN", payload: {data}}
  }

  const removeCheckIn = (id: string) => {
    dispatch: {type: "REMOVE_CHECKIN", payload: {id: id}}
  }

  const clearDay = (date: string) => {
    dispatch: {type: "CLEAR_DAY", payload: {date: date}}
  }

  return {addCheckIn, removeCheckIn, clearDay}
}