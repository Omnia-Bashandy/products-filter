import React from 'react';
import "../Components/style.css"

function Product(props) {
    const{item} = props;

    return (
        <>
            {/* <h1 key={item.id}>{item.title}</h1> */}
            <div class="card" key={item.id}>
                <img src={item.image} class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                    <div class="card__header-text">
                        <h3 class="card__title">{item.title}</h3>            
                        <span class="card__status">{item.price} $</span>
                    </div>
                </div>
                <p class="card__description">{item.description}</p>
                </div>
            </div>  
        </>
    );
}

export default Product;