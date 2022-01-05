import React from 'react'
import "../styles/featuresItem.css"
import Card from '../ui/Card'

function FeaturesItem(props)
{
    return (
      <li className='item'>
        <Card>
          <div className='images'>
            <img src={props.image} alt={props.id} />
          </div>
          <div className='contents'>
            <h3>{props.description}</h3>
          </div>
        </Card>
      </li>
    )
}

export default FeaturesItem;