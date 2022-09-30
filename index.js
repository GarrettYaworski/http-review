const requestButton = document.querySelector('button');
const kennel = document.querySelector('ul');

const appendDog = (dog) => {
  const dogEl = document.createElement('div');
  const dogImg = document.createElement('img');
  dogEl.textContent = dog.name;
  dogImg.src = dog.imageURL;
  dogEl.appendChild(dogImg)
  kennel.appendChild(dogEl);
}

requestButton.addEventListener('click', () => {
  axios.get('http://localhost:3001/api/dogs')
  .then((response) => {
    const dogs = response.data;
    dogs.forEach(appendDog);
  })
  .catch((err) => {
    console.log(err)
  })
})

document.querySelector('#random').addEventListener('click', () => {
  axios.get('http://localhost:3001/api/random')
  .then((res) => {
      const dog = res.data;
      appendDog(dog)
  })
  .catch((err) => {
    console.log(err)
  })
})

document.querySelector('#change-name').addEventListener('click', () => {
  const body = {
    name: 'American Akita',
    newName: 'Fluffy wolf'
  }
  
  axios.put('http://localhost:3001/api/dogs', body)
  .then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
})