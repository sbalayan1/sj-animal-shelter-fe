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
        <div className="cat-container">
            <h1 className="greeting"><em>Hello sir. Please adopt me!</em> </h1>
            <div className="animal-container">
                <div className="animal-card">
                    <img className="animal-image" src='http://petnaturals.com/blog/wp-content/uploads/2013/08/cat-in-space.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat1.name}</h4>
                    <small>Age: {cat1.age}</small>
                    <small>Breed: {cat1.breed}</small>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1' alt="picture of cat"/>           
                    <h4>Name: {cat2.name}</h4>
                    <small>Age: {cat2.age}</small>
                    <small>Breed: {cat2.breed}</small>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cat_1280p_0.jpg?itok=MFUV0a-t' alt="picture of cat"/>           
                    <h4>Name: {cat3.name}</h4>
                    <small>Age: {cat3.age}</small>
                    <small>Breed: {cat3.breed}</small>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat4.name}</h4>
                    <small>Age: {cat4.age}</small>
                    <small>Breed: {cat4.breed}</small>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://i.redd.it/9qneqatzpsz11.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat5.name}</h4>
                    <small>Age: {cat5.age}</small>
                    <small>Breed: {cat5.breed}</small>
                    <button className="adopt-button">Adopt</button>
                </div> 
                <div className="animal-card">
                    <img className="animal-image" src='https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg' alt="picture of cat"/>           
                    <h4>Name: {cat6.name}</h4>
                    <small>Age: {cat6.age}</small>
                    <small>Breed: {cat6.breed}</small>
                    <button className="adopt-button">Adopt</button>
                </div>
            </div>

        </div>
    )
}
