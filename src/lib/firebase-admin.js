import admin from 'firebase-admin';
import * as serviceAccount from "./secret.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;