import React, { useEffect, useRef, useState } from "react";
import GigsCard from "../../components/GigsCard/GigsCard";
// import { gigs } from "../../data";
import "./Gigs.scss";
import down from "../../assets/img/down.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");
    const minRef = useRef();
    const maxRef = useRef();

    const { search } = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
            newRequest
                .get(
                    `/gigs?min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
                )
                .then((res) => {
                    return res.data;
                })
                .catch((e) => console.log(e)),
    });

    // console.log(data?.data);

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        refetch();
    };
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">
                    FIVER {">"} GRAPHICS & DESIGN {">"}
                </span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Fiverr's
                    AI artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>budget</span>
                        <input ref={minRef} type="text" placeholder="min" />
                        <input ref={maxRef} type="text" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">SortBy</span>
                        <span className="sortType">
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img src={down} alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>
                                        Best Selling
                                    </span>
                                )}
                                <span onClick={() => reSort("sales")}>
                                    Popular
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="gigsWrapper">
                    {isLoading
                        ? "loading..."
                        : error
                        ? "Something went wrong"
                        : data.map((item) => (
                              <GigsCard item={item} key={item._id} />
                          ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
