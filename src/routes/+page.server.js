import admin from "firebase-admin";
import { init } from "$lib/firebase-admin";

export async function load({ locals }) {
  const db = admin.firestore();
  const dataRef = db.collection('Todos');
  const snapShot = await dataRef.get();
  const todos = snapShot.docs.map(doc => doc.data());
  return {
    todos:JSON.parse(JSON.stringify(todos)),
  }
}
