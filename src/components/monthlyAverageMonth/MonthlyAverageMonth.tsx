import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, DataSnapshot, query, orderByChild, equalTo, get } from "firebase/database";
import FirebaseConfig from '../../services/firebase-init';

const firebaseApp = initializeApp(FirebaseConfig); 
const db = getDatabase(firebaseApp);

export async function calculateMonthlyAverage(
  property: string,
  year: number,
  month: number,
  typeBien: string
): Promise<number> {
  let sum = 0;
  let count = 0;
  let dataFound = false;
  

  // Accès à la Realtime Database
  const refDB = ref(db, "/");

  // Check if annee_mutation is equal to year
  try {
    const q = query(refDB, orderByChild("annee_mutation"), equalTo(year));
    const snapshot = await get(q);

    snapshot.forEach((childSnapshot: DataSnapshot) => {
      const data = childSnapshot.val();

      // Extract the month from mois_mutation and convert it to a number
      const monthFromData = parseInt(data["mois_mutation"].split('-')[1], 10);
        if (monthFromData === month && data["type_de_bien"] === typeBien) {
          sum += data[property];
          count++;
          dataFound = true;
        }
    });

    if (!dataFound) { 
      return 0;
    }

    if (count === 0) {
      throw new Error("No data found");
    }

    return sum / count;

  } catch (error) {
    throw error;
  }
}