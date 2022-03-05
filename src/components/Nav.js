import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../routes/Home";
import News from "../routes/News";
import Todo from "../routes/Todo";
import Calcolator from "../routes/Culcolator";

import styled from "styled-components";
import Board1 from "../routes/Board1";
import Game from "../routes/Game";

const Nav1 = styled.div`
    height: 60px;
`;

const Link1 = styled.ul`
    display: flex;
    text-align: center;
    line-height: 60px;
    justify-content: space-around;
    padding: 0;
    text-decoration: none;
    font-size: 15px;
    flex-grow: 1;
    transition: 0.3s;
    -webkit-transform: scale(1);
    transform: scale(1);
    list-style: none;
    margin: 0;
`;

const StyleLink = styled(Link)`
    text-decoration: none;
    color: rgb(255, 254, 254);
    font-family: "Jua", sans-serif;
    background-color: #455a64;
    border-radius: 110px;

    padding-top: 0;
    padding-bottom: 0;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 15px;
`;

const Span = styled.span``;

const Nav = () => {
    return (
        <Nav1>
            <Link1>
                <StyleLink to="/todo">
                    <Span>Todo</Span>
                </StyleLink>

                <StyleLink to="/game">
                    <Span>Game</Span>
                </StyleLink>

                <StyleLink to="/">
                    <Span>Carousel</Span>
                </StyleLink>

                <StyleLink to="/calculator">
                    <Span>Calculator</Span>
                </StyleLink>

                <StyleLink to="/news">
                    <Span>News</Span>
                </StyleLink>
            </Link1>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/game" element={<Game />} />
                <Route path="/calculator" element={<Calcolator />} />
            </Routes>
        </Nav1>
    );
};

export default Nav;
