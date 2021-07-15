import React from 'react'

export default function Dog(animalData) {

    let dog = Object.values(animalData.animalData).filter ((animal) => animal.species === "Dog").map ((dog) => dog.name)


    console.log(dog)

    return (
        <div className="dog_list">
            <p className="dog_names">
                {dog}
            </p>
        </div>
    )
}
