import { useMemo } from "react";
import { type CheckIn, type Mood } from "../types";

function useDayStats(checkIns: CheckIn[]) {
  const stats = useMemo(() => {
    const today = new Date().toLocaleDateString("sv-SE")

    //Totalt antal checkIns
    const totalCheckIns = checkIns.length

    //alla dagens check-ins
    const todayCheckIns: CheckIn[] = checkIns.filter(item => item.timestamp.toLocaleDateString("sv-SE") === today)
    
    //Räkna ut average energi idag
    const totalEnergy = todayCheckIns.reduce((acc, item) => {
      return acc + item.energy
    }, 0)
    const averageEnergy: number = totalEnergy / todayCheckIns.length

    //Räkna ut mood distribution
    const moodDistrubition = todayCheckIns.reduce((acc, item) => {
      const mood: Mood = item.mood
      acc[mood] = (acc[mood] || 0) + 1
      return acc
    }, {} as Record<Mood, number>)

    return {averageEnergy, moodDistrubition, totalCheckIns, todayCheckIns}

  }, [checkIns])

  return stats
}

export default useDayStats