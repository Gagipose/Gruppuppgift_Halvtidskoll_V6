import type { CheckIn } from "./types";

// Implementera en checkInReducer som hanterar följande actions:
// • ADD_CHECKIN – Lägger till en ny check-in
// • REMOVE_CHECKIN – Tar bort en check-in baserat på id
// • CLEAR_DAY – Rensar alla check-ins för dagens datum



// Omit -> tar allt från CheckIn, förutom "id" och "timestamp"
type CheckInAction =
 | { type: "ADD_CHECKIN"; payload: Omit<CheckIn, "id" | "timestamp"> }
 | { type: "REMOVE_CHECKIN"; payload: { id: string } }
 | { type: "CLEAR_DAY"; payload: { date: string } };

function checkInReducer (state: CheckIn[], action: CheckInAction) {
  switch (action.type) {
    case "ADD_CHECKIN":
      return [...state, {
        id: crypto.randomUUID(), 
        name: action.payload.name,
        mood: action.payload.mood,
        energy: action.payload.energy,
        comment: action.payload.comment ? action.payload.comment : null,
        timeStamp: Date.now()
      }]
    case "REMOVE_CHECKIN": 
      return state.filter(item => item.id !== action.payload.id);
    case "CLEAR_DAY":
      const today: string = new Date().toLocaleDateString("sv-SE");
      return state.filter(item => item.timestamp.toLocaleDateString("sv-SE") !== today);

    default:
      return state
  }
}

export {checkInReducer}