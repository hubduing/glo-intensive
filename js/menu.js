const restorant = 'food-band'

const renderItems = (data) => {
  data.forEach(element => {
    console.log(element);
    // Object.entries(element).forEach((elem) => {
    //   console.log(elem);
    // })
  });
}

fetch(`https://practice-7d984-default-rtdb.firebaseio.com/db/${restorant}.json`)
.then((response) => response.json())
.then((data) => renderItems(data))
.catch((error) => {
  console.log(error)
})