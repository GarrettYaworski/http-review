const cors = require('cors');
const express = require('express');
const breeds = require('dog-breeds');
const PORT = 3001;

const breedCopy = [...breeds.all];

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/dogs', (req, res) => {
  res.status(200).send(breeds.all);
})

app.get('/api/random', (req, res) => {
  res.status(200).send(breeds.random())
})

// const dogObj = {
//   "name":"Vanjari Hound", //'Zoey
//   "origin":"India",
//   "imageURL":"https://upload.wikimedia.org/wikipedia/commons/2/21/Banjara_from_1915.JPG"
// }

// dogObj.name = 'Zoey'

app.put('/api/dogs', (req, res) => {
  const { name, newName } = req.body;
  const dogIndex = breedCopy.findIndex(
    (dog) => dog.name.toLowerCase() === name.toLowerCase()
  );
  const selectedDog = breedCopy[dogIndex];
  selectedDog.name = newName;
  res.status(200).send(selectedDog);
})

app.listen(PORT, () => { console.log(`server running on port ${PORT}`) })