import React from 'react'

export default function Cat(animalData) {

    let cat = Object.values(animalData.animalData).filter ((animal) => animal.species === "Cat").map ((cat) => cat.name)


    return (
        <div>
            {cat}
        </div>
    )
}
