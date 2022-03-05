import React from "react";

import styled from "styled-components";

const StyleNewsItem = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Img = styled.img`
    width: 200px;
    height: 170px;
`;

const StyleAtag = styled.a`
    text-decoration: none;
    color: black;
    transform: scale(1);
`;

const StyleP = styled.p`
    margin-top: 0;
    margin-left: 10px;
`;

const StyleH2 = styled.h2`
    margin-top: 0;
    margin-left: 10px;
`;
const NewsItem = (article) => {
    const { title, description, url, urlToImage } = article.article;

    return (
        <StyleNewsItem>
            <StyleAtag href={url} target="_blank" rel="noopener noreferrer">
                <Img src={urlToImage} alt="thumbnail" />
            </StyleAtag>
            <div>
                <StyleH2>
                    <StyleAtag
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title}
                    </StyleAtag>
                </StyleH2>
                <StyleP>{description}</StyleP>
            </div>
        </StyleNewsItem>
    );
};

export default NewsItem;
