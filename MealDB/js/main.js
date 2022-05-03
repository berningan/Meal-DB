document.querySelector('button').addEventListener('click', getDish)


function getDish(){
    let dish = document.querySelector('input').value.toLowerCase()

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals) 
        document.querySelector('.dish-name').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
        document.querySelector('.instructions').innerText = data.meals[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}