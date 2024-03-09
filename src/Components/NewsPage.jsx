import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card";
import fetchNews from "../fetchNews";

function NewsPage() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch initial data when the component mounts
        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    const fetchData = async () => {
        const newsData = await fetchNews(searchQuery);
        for (let i = 0; i < newsData.length; i++) {
            if (newsData[i].imageurl === "") {
                newsData[i].imageurl =
                    "https://www.abc.net.au/news/image/8314104-3x2-940x627.jpg";
            }
            const publishedDate = new Date(newsData[i].publishedAt);
            newsData[i].publishedAt = publishedDate.toLocaleDateString(
                "en-US",
                { timeZone: "UTC" }
            );
        }
        setNews(newsData);
    };

    const handleSearch = () => {
        fetchData();
    };

    const RecordsList = news.map((item, index) => (
        <div key={index} className="mb-8 mx-4">
            <Card
                value={item.description}
                likes={item.likes}
                year={item.publishedAt}
                imageurl={item.urlToImage}
                title={item.title}
                url={item.url}
            />
        </div>
    ));

    return (
        <div className="bg-[#181819] min-w-[100vw] max-w-[100vw] flex">
            <div className="card w-[30vw] h-[92vh] flex flex-col justify-center items-center bg-[#000] rounded-xl ml-5 mt-8">
                <div className="flex justify-center items-center">
                    <div className="text-[#fff] text-[3vw] font-bold">
                        News
                    </div>
                    <div className="text-[hsl(324,100%,85%)] text-[3vw] font-bold">
                        Board
                    </div>
                </div>
                <div className="h-[10vh] flex justify-center items-center">
                    <input
                        type="text"
                        className="search h-[5vh] pl-3 rounded-lg"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <button className="searchButton w-[7vw] h-[5vh] bg-[hsl(324,100%,85%)] rounded-lg text-[1.25vw]" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className="w-[70vw] overflow-y-auto flex justify-center items-center">
                <div className="container mx-auto py-8">
                    <div className="flex flex-wrap justify-center">
                        {RecordsList}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;
