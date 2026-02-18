// Implementera en enkel tema-hantering med:
// • theme – "light" | "dark"
// • toggleTheme – Funktion som växlar tema
// • Använd useCallback för att stabilisera toggleTheme


import { createContext } from "react";
import useCheckIns from "../custom hooks/useCheckIns";
import useDayStats from "../custom hooks/useDayStats";
import { type CheckIn, type DayStats } from "../types";

interface CheckInContextValue {
  checkIns: CheckIn[],
  todayCheckIns: CheckIn[],
  stats: DayStats,
  addCheckIn: (data: Omit<CheckIn, "id" | "timestamp">) => void,
  removeCheckIn: (id: string) => void,
  clearDay: (date: string) => void
}

const CheckInContext = createContext<CheckInContextValue | undefined>(undefined)

export default function CheckInProvider({children}: {children: React.ReactNode}) {

  const { addCheckIn, removeCheckIn, clearDay, allCheckIns} = useCheckIns()
  const { averageEnergy, moodDistrubition, totalCheckIns, todayCheckIns } = useDayStats(allCheckIns)

  const valueProps: CheckInContextValue = {
    checkIns: allCheckIns,
    todayCheckIns: todayCheckIns,
    stats: {averageEnergy: averageEnergy, moodDistrubition: moodDistrubition, totalCheckIns: totalCheckIns},
    addCheckIn: addCheckIn,
    removeCheckIn: removeCheckIn,
    clearDay: clearDay
  }

  return(
    <CheckInContext.Provider value={valueProps}>
      {children}
    </CheckInContext.Provider>
  )
}