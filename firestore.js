const admin = require("firebase-admin");

const credential = admin.credential.cert(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential,
});

const db = admin.firestore();

console.log('Success', db)
