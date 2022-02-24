import { FaStar } from "react-icons/fa";
import "./StarRating.css"
import React, { useState } from "react"

export const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <>
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                return <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        className="star"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            })}
            <div>The rating is {rating}</div>
        </div>
    </>
}