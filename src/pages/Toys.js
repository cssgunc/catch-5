import React from 'react'

export default function Toys() {
  return (
    <>
      <link rel = 'stylesheet' href = {require('./Toys.css')}></link>
      <div>
        <img src = {require('../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-020A.JPG')} id = 'background-picture' alt = 'CATCH Team'/>
      </div>
      <h1><b>Toy Catalog</b></h1>
      <h3><b>Adapted Toys</b></h3>
      <div><i>Click on the photos to view the toy guides</i></div>
      <div id = 'catalog-holder'> {/* Contains the catalog*/}
        <div id = 'catalog'> {/* Contains the images */}
          <div className="toy"> {/* Each toy element is a member the "toy" class */}
          <a href = 'https://docs.google.com/presentation/d/1wbJqiEVo8fUr-7MK_vaexr9-cqTBe6HjSzHXuhyEOuY/edit#slide=id.p'>
            <img src = {require('../images/Toy Catolog/Copy of trex.jpg')} className = 'catalog-picture' alt = 'Modified T-rex Toy'/>
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>
          <div className="toy">
          <a href = 'https://docs.google.com/presentation/d/1sG6zYR71rNoACMY5j51roubwaqilKjNm_EgJfxFn7VU/edit#slide=id.p'>
            <img src = {require('../images/Toy Catolog/Copy of airplane.jpg')} className = 'catalog-picture' alt = 'Modified Plane Toy'/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>
          <div className = "toy">
          <a href = 'https://docs.google.com/presentation/d/12rRDEw87h6ICf5L7guNQBBB5o5kUtJ3QybOLMZ_QNRg/edit?usp=sharing'>
            <img src = {require('../images/Toy Catolog/Copy of garbage.jpg')} className = 'catalog-picture' alt = 'Modified Truck Toy'/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>
          <div className = "toy">
            <img src = {require('../images/Toy Catolog/Copy of bus.jpg')} className = 'catalog-picture' alt = 'Modified School Bus Toy'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>
          <div className = "toy">
            <img src = {require('../images/Toy Catolog/Copy of snake.jpg')} className = 'catalog-picture' alt = 'Modified Snake Toy'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
          <a href = 'https://docs.google.com/presentation/d/1wNAGJYabdsUwAWgdzBGDGSQVSf8A0drX-7Vv6Ua_UU4/edit#slide=id.ge901fea6e3_0_80'>
            <img src = {require('../images/Toy Catolog/Copy of Edited_Dd.jpg')} className = 'catalog-picture' alt = 'Modified Automobile Toy'/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
          <a href = 'https://docs.google.com/presentation/d/1rYG7PFngmJgI7uBpoO3ydhBF3RiEJJCjJ8ZIl-tqLXY/edit#slide=id.p'>
            <img src = {require('../images/Toy Catolog/Copy of Edited_Ft.jpg')} className = 'catalog-picture' alt = 'Modified Fire Truck Toy'/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
          <a href = 'https://docs.google.com/presentation/d/1wNAGJYabdsUwAWgdzBGDGSQVSf8A0drX-7Vv6Ua_UU4/edit#slide=id.p'>
            <img src = {require('../images/Toy Catolog/Copy of Edited_Tractor.jpg')} className = 'catalog-picture' alt = 'Modified Tractor Toy'/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
            <img src = {require('../images/Toy Catolog/Copy of Edited_Lizard.jpg')} className = 'catalog-picture' alt = 'Modified Lizard Toy'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
          <a href = 'https://docs.google.com/document/d/1rYR7cj2QgniXExzF7qxCrk9XsvUmf7qV7L0kWtusydA/edit'>
            <img src = {require('../images/Toy Catolog/Copy of Edited_Penguin.jpg')} className = 'catalog-picture' alt = 'Modified Penguin Slide Toy'/>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
            <img src = {require('../images/Toy Catolog/Copy of Edited_Alien.jpg')} className = 'catalog-picture' alt = 'Modified Alien Toy'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div v = "toy">
            <img src = {require('../images/Toy Catolog/Copy of Edited_Dog.jpg')} className = 'catalog-picture' alt = 'Modified Dog Toy'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
            <div className = "toy">
            <img src = {require('../images/Toy Catolog/Copy of Edited_Pixie.jpg')} className = 'catalog-picture' alt = 'Modified Pixie Toy'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="add-button" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </div>
        </div>
      </div>
      <div>
        <img src = {require('../images/logo.png')} className = 'catch-logo' alt = 'CATCH Logo'/>
      </div>
        <a href="#" className="logo">Shopping Cart</a>
        <div className="cart-icon-container">
          <i className='bx bx-shopping-bag' id="cart-icon"></i>
        </div>
      {/* The shopping cart sidebar */}
      <div className = "cart">
        <h2 className = "cart-title">Your Cart</h2>
        <div className = "cart-item">
        <div><img className = "cart-item-image" src = {require('../images/Toy Catolog/Copy of snake.jpg')} alt = 'Modified Snake Toy'/> </div>
        <div>
          <h3 className = "cart-item-title">
            Snake Toy
          </h3>
          <h4 className = "cart-item-info">
            Info About Item
          </h4>
          <div className = "item-quantity-changer"> {/* Contains the trash can and item quantity counter */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cart-trash" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
          <div className = "counter">
        	<div className="minus">-</div>
          <div type = "number" value="1" className = "cart-quantity">1</div>
        	<div className="plus">+</div>
          </div>
          </div>
          </div>
        </div>
        {/* Close button */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" id="close-button" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        <script src="/ToyHelper.js"></script>

      </div>
    </>
  )
}