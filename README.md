# EVB Construction and Trading Services Website
## Website for REACT
### By Ernest Bruno (Week of 5/14/18)


# Setup

* Create a firebaseConfig.js in constants folder.
* Acquire API key from dev and paste into firebaseConfig.js.
* Code should look like this:
```javascript
const firebaseConfig = {
    apiKey: 'YOUR-UNIQUE-CREDENTIALS',
    authDomain: 'YOUR-PROJECT-NAME.firebaseapp.com',
    databaseURL: 'https://YOUR-PROJECT-NAME.firebaseio.com',
    projectId: 'YOUR-UNIQUE-PROJECT-NAME',
    storageBucket: 'YOUR-UNIQUE-URL',
    messagingSenderId: 'YOUR-UNIQUE-CREDENTIALS'
};

export default firebaseConfig;
```