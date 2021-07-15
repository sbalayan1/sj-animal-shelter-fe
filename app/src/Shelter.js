import React from 'react'

export default function Shelter(shelterData) {

    let shelter = Object.values(shelterData.shelterData).map ((shelter) => shelter.name)
    return (
        <div>
            {shelter}
        </div>
    )
}
