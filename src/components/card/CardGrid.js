import React from "react";
import './Card.css';
import CardItem from "./CardItem";

function CardGrid(props) {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {props.cards.map(
                            card => (
                                <CardItem 
                                    src={ card.image } 
                                    text={ card.text }
                                    label={ card.label }
                                    path={ card.path }
                                />
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardGrid
