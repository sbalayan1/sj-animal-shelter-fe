import React from 'react'

export default function Dog(animalData) {

    let dogArray = Object.values(animalData.animalData).filter ((animal) => animal.species === "Dog")

    let dog1 = dogArray[0]
    let dog2 = dogArray[1]
    let dog3 = dogArray[2]
    let dog4 = dogArray[3]
    let dog5 = dogArray[4]
    let dog6 = dogArray[5]


    // console.log(cat1)

    return (
        <div className="animal-container">
            <div className="animal-card">
                <img className="animal-image" src='https://www.pets4homes.co.uk/images/articles/2985/large/how-to-tell-the-difference-between-a-boston-terrier-and-a-french-bulldog-558a7806631be.jpg' alt="picture of dog"/>           
                <h4>Name: {dog1.name}</h4>
                <h6>Age: {dog1.age}</h6>
                <h6>Breed: {dog1.breed}</h6>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg' alt="picture of dog2"/>           
                <h4>Name: {dog2.name}</h4>
                <h6>Age: {dog2.age}</h6>
                <h6>Breed: {dog2.breed}</h6>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg' alt="picture of dog3"/>           
                <h4>Name: {dog3.name}</h4>
                <h6>Age: {dog3.age}</h6>
                <h6>Breed: {dog3.breed}</h6>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg' alt="picture of dog4"/>           
                <h4>Name: {dog4.name}</h4>
                <h6>Age: {dog4.age}</h6>
                <h6>Breed: {dog4.breed}</h6>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg' alt="picture of dog5"/>           
                <h4>Name: {dog5.name}</h4>
                <h6>Age: {dog5.age}</h6>
                <h6>Breed: {dog5.breed}</h6>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg' alt="picture of dog6"/>           
                <h4>Name: {dog6.name}</h4>
                <h6>Age: {dog6.age}</h6>
                <h6>Breed: {dog6.breed}</h6>
            </div> 
            

        </div>
    )
}
