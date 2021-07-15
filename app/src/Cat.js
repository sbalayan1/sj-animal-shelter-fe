import { React, useState, useEffect } from 'react'


export default function Cat(animalData) {
    let catArray = Object.values(animalData.animalData).filter ((animal) => animal.species === "Cat")



    let cat1 = catArray[Math.floor(Math.random()*catArray.length)]
    let cat2 = catArray[Math.floor(Math.random()*catArray.length)]
    let cat3 = catArray[Math.floor(Math.random()*catArray.length)]
    let cat4 = catArray[Math.floor(Math.random()*catArray.length)]
    let cat5 = catArray[Math.floor(Math.random()*catArray.length)]
    let cat6 = catArray[Math.floor(Math.random()*catArray.length)]


    // console.log(cat1)

    return (
        <div className="animal-container">
            <div className="animal-card">
                <img className="animal-image" src='http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg' alt="picture of cat"/>           
                <h4>Name: {cat1.name}</h4>
                <h6>Age: {cat1.age}</h6>
                <h6>Breed: {cat1.breed}</h6>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg' alt="picture of cat2"/>           
                <h4>Name: {cat2.name}</h4>
                <h6>Age: {cat2.age}</h6>
                <h6>Breed: {cat2.breed}</h6>
            </div> 

        </div>
    )
}
