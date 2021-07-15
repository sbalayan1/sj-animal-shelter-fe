import React from 'react'

export default function Adoption(adoptionData, animalData) {

    // let animal_id = Object.values(animalData.animalData).map ((animal) => animal.id)

    let adoption = Object.values(adoptionData.adoptionData).map ((adoption) => adoption.date + " " + "$"+adoption.price)

    return (
        <div>
            {adoption}
        </div>
    )
}
