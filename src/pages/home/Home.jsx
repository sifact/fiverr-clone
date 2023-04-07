import React from "react";
import Featured from "../../components/Featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/CatCard/CatCard";

const Home = () => {
    return (
        <>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((item) => (
                    <CatCard item={item} key={item.id} />
                ))}
            </Slide>
        </>
    );
};

export default Home;
