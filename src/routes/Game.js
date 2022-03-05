import React, { useEffect, useState } from "react";
import styled from "styled-components";
import party from "./img/party.png";
import up from "./img/up.png";
import down from "./img/down.png";
import hi from "./img/hi.png";
import bomb from "./img/bomb.png";
const StyleGame = styled.div`
    background-color: #37474f;
    width: 600px;
    height: 800px;
    margin: auto;
    margin-top: 100px;
    border-radius: 10px;
`;

const Header = styled.div`
    background-color: #102027;
    width: 600px;
    height: 100px;
    margin: auto;
    text-align: center;
    line-height: 105px;
    font-size: 40px;
    font-family: "Jua", sans-serif;
    color: #f5f5f5;
    border-radius: 10px;
`;

const Main = styled.div`
    background-color: white;
    width: 600px;
    height: 700px;
    background-color: #37474f;
    border-radius: 10px;
`;

const InputBox = styled.div`
    width: 500px;
    height: 50px;
    margin: auto;
    margin-top: 50px;
    display: flex;
`;

const Input = styled.input`
    width: 350px;
    height: 45px;
    margin-left: 40px;
    text-align: center;
    border-radius: 10px;
    font-family: "Jua", sans-serif;
    font-size: 20px;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    height: 50px;
    width: 50px;
    margin-left: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Jua", sans-serif;
    border: none;

    &:hover {
        background-color: gray;
    }
`;

const Button2 = styled.button`
    height: 50px;
    width: 100px;
    margin-left: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Jua", sans-serif;
    border: none;

    &:hover {
        background-color: gray;
    }
`;

const ImgBox = styled.img`
    width: 350px;
    height: 350px;

    display: block;
    margin: auto;
    margin-top: 130px;
    border-radius: 10px;
`;

const Life = styled.div`
    text-align: center;
    line-height: 170px;
    font-family: "Jua", sans-serif;
    color: #f5f5f5;
    font-size: 40px;
`;

const Game = () => {
    const [randomNum, setRandomNum] = useState("");
    const [inputNum, setInputNum] = useState(0);
    const [getImg, setGetImg] = useState(hi);
    const [life, SetLife] = useState(6);

    const handleRandom = () => {
        setRandomNum(Math.floor(Math.random() * 50 + 1));
        setInputNum(0);
        setGetImg(hi);
        SetLife(6);
    };

    const handleInputNum = (e) => {
        setInputNum(e.target.value);
    };

    const ClickInputNum = () => {
        if (inputNum == randomNum) {
            setGetImg(party);
            SetLife(life - 1);
        } else if (inputNum > randomNum) {
            setGetImg(down);
            SetLife(life - 1);
        } else if (inputNum < randomNum) {
            setGetImg(up);
            SetLife(life - 1);
        }

        if (life == 1) {
            setGetImg(bomb);
            setTimeout(() => {
                handleRandom();
            }, 2000);
        }
        console.log(life);
    };

    return (
        <StyleGame>
            <Header>UP&DOWN GAME (1~50)</Header>
            <Main>
                <InputBox>
                    <Input value={inputNum} onChange={handleInputNum}></Input>
                    <Button onClick={ClickInputNum}>Click</Button>
                    <Button2 onClick={handleRandom}>Start</Button2>
                </InputBox>
                <ImgBox src={`${getImg}`} />
                <Life>Life : {life}</Life>
            </Main>
        </StyleGame>
    );
};

export default Game;
