import React from "react";
import styled from "styled-components";

const Category1 = styled.div`
    cursor: pointer;
    font-family: "Jua", sans-serif;
    font-size: 20px;
    border: 3px solid black;
    padding: 10px;
    border-radius: 100px;
`;

const Category = ({ c, onSelect }) => {
    return <Category1 onClick={() => onSelect(c.name)}>{c.text}</Category1>;
};

export default Category;
