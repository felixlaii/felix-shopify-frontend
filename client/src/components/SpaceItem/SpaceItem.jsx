import React from 'react'

function SpaceItem({earthData, id, img, roverName}) {
    return (
        <div>
            <img src={img} alt="rover" />
            <p>{earthData}</p>
            <p>{roverName}</p>
        </div>
    )
}

export default SpaceItem
