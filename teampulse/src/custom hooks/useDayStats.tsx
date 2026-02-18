import { useMemo } from "react";
import { type CheckIn, type Mood } from "../types";

function useDayState(checkIns: CheckIn[]) {
  const stats = useMemo(() => {
    const today = new Date().toLocaleDateString("sv-SE")

    
    //alla dagens check-ins
    const todayCheckIns: CheckIn[] = checkIns.filter(item => item.timestamp.toLocaleDateString("sv-SE") === today)
    
    //Räkna ut average energi idag
    let averageEnergy: number
    todayCheckIns.map((item) => {
      const totalEnergy: number =+ item.energy
      averageEnergy = totalEnergy / todayCheckIns.length
    })

    //Räkna ut mood distribution
    const moodDistrubition = todayCheckIns.reduce((acc, item) => {
      const mood: Mood = item.mood
      acc[mood] = (acc[mood] || 0) + 1
      return acc
    }, {} as Record<Mood, number>)

    return {averageEnergy, moodDistrubition}

  }, [checkIns])
}

export default useDayState