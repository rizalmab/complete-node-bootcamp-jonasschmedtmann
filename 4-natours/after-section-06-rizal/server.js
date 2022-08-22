const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful'));

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
});
const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Forest Hiker',
  rating: 4.7,
  price: 497
});

const testTour3 = new Tour({
  name: 'Middle Eastern Journey',
  rating: 3.0,
  price: 500
});

// testTour
//   .save()
//   .then(doc => console.log(doc))
//   .catch(err => {
//     console.log('Error:', err);
//   });

testTour3
  .save()
  .then(doc => console.log(doc))
  .catch(err => {
    console.log('Error:', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
