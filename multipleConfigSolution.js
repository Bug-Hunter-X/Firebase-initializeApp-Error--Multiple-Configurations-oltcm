To avoid this error, ensure you only call `firebase.initializeApp()` once. If you need multiple Firebase configurations, use separate instances and store them in variables.  This example demonstrates correct usage and handles initialization based on an environment variable.

```javascript
// Correct approach - conditional initialization
const firebaseConfig = process.env.NODE_ENV === 'production' ? configProduction : configDevelopment;

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//Access Firebase services as needed
const db = firebase.firestore(); 
```