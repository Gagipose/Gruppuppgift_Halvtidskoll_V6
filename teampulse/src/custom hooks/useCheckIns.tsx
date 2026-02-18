import { useReducer } from "react";
import { checkInReducer } from "../reducer";
import type { CheckIn } from "../types";

const initialState: CheckIn[] = []

function useCheckIns() {
  const [state, dispatch] = useReducer(checkInReducer, initialState);

  const addCheckIn = (data: Omit<CheckIn, "id" | "timestamp">) => {
    dispatch({type: "ADD_CHECKIN", payload: data})
  }

  const removeCheckIn = (id: string) => {
    dispatch({type: "REMOVE_CHECKIN", payload: {id: id}})
  }

  const clearDay = (date: string) => {
    dispatch({type: "CLEAR_DAY", payload: {date: date}})
  }

  return {allCheckIns: state, addCheckIn, removeCheckIn, clearDay}
}

export default useCheckIns