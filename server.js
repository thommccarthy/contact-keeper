const express = require('express');

const app = express();

// create route for get request
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the contact keeper api...' });
});

//define routes - passed in route appends routes that are imported
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// in development, port 5000 otherwise port will be set via environment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
