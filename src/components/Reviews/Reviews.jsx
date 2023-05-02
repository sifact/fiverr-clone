import React from "react";
import "./Reviews.scss";
import Review from "../Review/Review";

const Reviews = ({ id }) => {
    return (
        <div className="reviews">
            <h2>Reviews</h2>
            <Review id={id} />
        </div>
    );
};

export default Reviews;
