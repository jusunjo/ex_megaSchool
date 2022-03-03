import axios from "axios";
import React, { useEffect, useState } from "react";

import Categorys from "./Categorys";

import NewsItem from "./NewsItem";
import styled from "styled-components";

const StyleNews = styled.div`
    margin-top: 30px;
`;
const News = () => {
    const [articles, setArticles] = useState(null);
    const [category, setCategory] = useState("all");

    const onSelect = (cate) => {
        setCategory(cate);
        console.log(1);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = category === "all" ? "" : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=77c6e9b9c92b45bc838c388bec7a59df`
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [category]);

    if (!articles) {
        return null;
    }

    return (
        <StyleNews>
            <Categorys onSelect={onSelect} />
            {articles &&
                articles.map((article) => (
                    <NewsItem key={article.url} article={article} />
                ))}
        </StyleNews>
    );
};

export default News;
