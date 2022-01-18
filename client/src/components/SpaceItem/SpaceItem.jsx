import React from "react";
import "./spaceItem.scss";
import LikeButton from "../LikeButton/LikeButton";

function SpaceItem({ title, id, img, description, date }) {
  return (
    <div className="space-item">
      <div className="space-item__wrapper">
        <div className="space-item__card">
          <li className="space-item__list">
          <p className="space-item__description">{title}</p>
            <div className="space-item__picture">
              <img className="space-item__image" src={img} alt="rover" />
            </div>
            <LikeButton />
            <div className="space-item__details">
              <p className="space-item__description">{date}</p>
              <p className="space-item__description">{description}</p>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default SpaceItem;
