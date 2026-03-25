import React from 'react'
import { roomsDummyData } from '../assets/assets'

const FeaturedDestination = () => {
  return (
    <div>
      <div>
        {roomsDummyData.slice(0, 4).map((room) => (
          <div key={room._id}>
            <img src={room.images[0]} alt={room.hotel.name} />
            <p>{room.hotel.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestination
