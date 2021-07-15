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
        <div>
            <h1 className="greeting"><em>Hello sir. Please adopt me!</em> </h1>
            <div className="animal-container">
                
                <div className="animal-card">
                    <img className="animal-image" src='http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat1.name}</h4>
                    <h6>Age: {cat1.age}</h6>
                    <h6>Breed: {cat1.breed}</h6>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat2.name}</h4>
                    <h6>Age: {cat2.age}</h6>
                    <h6>Breed: {cat2.breed}</h6>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cat_1280p_0.jpg?itok=MFUV0a-t' alt="picture of cat"/>           
                    <h4>Name: {cat3.name}</h4>
                    <h6>Age: {cat3.age}</h6>
                    <h6>Breed: {cat3.breed}</h6>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat4.name}</h4>
                    <h6>Age: {cat4.age}</h6>
                    <h6>Breed: {cat4.breed}</h6>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://zoo.sandiegozoo.org/sites/default/files/styles/hero_mobile_560x670/public/2019-01/hero-amurleopardcats_0.jpg?itok=WrbUuMb_' alt="picture of cat"/>           
                    <h4>Name: {cat5.name}</h4>
                    <h6>Age: {cat5.age}</h6>
                    <h6>Breed: {cat5.breed}</h6>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://cdn.vox-cdn.com/thumbor/p2x3cL6eHvyco1RRdIarPHjsZGg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19539772/cats4.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat6.name}</h4>
                    <h6>Age: {cat6.age}</h6>
                    <h6>Breed: {cat6.breed}</h6>
                    <button className="adopt-button">Adopt</button>
                </div>
            </div>

        </div>
    )
}
