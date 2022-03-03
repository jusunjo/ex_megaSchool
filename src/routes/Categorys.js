import React from "react";
import styled from "styled-components";
import Category from "./Category";

const StyleCategory = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
`;
const Categorys = ({ onSelect }) => {
    const categories = [
        {
            name: "all",
            text: "전체보기",
        },
        {
            name: "business",
            text: "비즈니스",
        },
        {
            name: "entertainment",
            text: "엔터테인먼트",
        },
        {
            name: "health",
            text: "건강",
        },
        {
            name: "science",
            text: "과학",
        },
        {
            name: "sports",
            text: "스포츠",
        },
        {
            name: "technology",
            text: "기술",
        },
    ];

    return (
        <StyleCategory>
            {categories.map((c) => (
                <Category onSelect={onSelect} key={c.name} c={c} />
            ))}
        </StyleCategory>
    );
};

export default Categorys;
