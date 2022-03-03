import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyleCulcolator = styled.div`
    background-color: #718792;
    width: 350px;
    height: 560px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    border-radius: 10px;
`;

const Display = styled.div`
    width: 320px;
    height: 70px;
    background-color: #eceff1;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
`;

const InDisplay = styled.div`
    /* background-color: blue; */
    width: 300px;
    height: 50px;
    margin: auto;
    margin-top: 10px;
    text-align: right;
    line-height: 50px;
    font-family: "Jua", sans-serif;
    font-size: 26px;
`;

const Keyboard = styled.div`
    width: 320px;
    height: 430px;
    /* background-color: #90a4ae; */
    margin: auto;

    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
    & :hover {
        background-color: #4b636e;
    }
`;

const Button = styled.button`
    width: 70px;
    height: 80px;
    background-color: #62757f;
    border-radius: 10px;
    text-align: center;
    line-height: 80px;
    font-family: "Jua", sans-serif;
    font-size: 25px;
    cursor: pointer;
    border: none;
`;

const ClearButton = styled.button`
    width: 320px;
    height: 70px;
    background-color: #62757f;
    text-align: center;
    border-radius: 10px;
    line-height: 65px;
    font-family: "Jua", sans-serif;
    border: none;
    font-size: 25px;
`;

const Culcolator = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const HandleClick = (e) => {
        const inputValue = e.target.value;

        if (result) {
            setResult(result + inputValue);
        } else {
            setValue(value + inputValue);
        }
    };

    // console.log(value.includes("**"));
    const Clear = () => {
        setResult("");
        setValue("");
    };

    const Result = () => {
        if (result) {
            setResult(eval(result));
        } else {
            setResult(eval(value));
        }

        console.log(result);
    };

    const change = () => {
        if (result) {
            return result;
        } else {
            return value;
        }
    };

    return (
        <StyleCulcolator>
            <Display>
                <InDisplay>{change()}</InDisplay>
            </Display>
            <Keyboard>
                <Button onClick={HandleClick} value="7">
                    7
                </Button>
                <Button onClick={HandleClick} value="8">
                    8
                </Button>
                <Button onClick={HandleClick} value="9">
                    9
                </Button>
                <Button onClick={HandleClick} name="operator" value="/">
                    ÷
                </Button>
                <Button onClick={HandleClick} value="4">
                    4
                </Button>
                <Button onClick={HandleClick} value="5">
                    5
                </Button>
                <Button onClick={HandleClick} value="6">
                    6
                </Button>
                <Button onClick={HandleClick} name="operator" value="+">
                    +
                </Button>
                <Button onClick={HandleClick} value="1">
                    1
                </Button>
                <Button onClick={HandleClick} value="2">
                    2
                </Button>
                <Button onClick={HandleClick} value="3">
                    3
                </Button>
                <Button onClick={HandleClick} name="operator" value="-">
                    -
                </Button>
                <Button onClick={HandleClick} name="operator" value=".">
                    .
                </Button>
                <Button onClick={HandleClick} value="0">
                    0
                </Button>
                <Button onClick={Result} value="=">
                    =
                </Button>
                <Button onClick={HandleClick} name="operator" value="*">
                    x
                </Button>
                <ClearButton onClick={Clear} value="clear">
                    Clear
                </ClearButton>
            </Keyboard>
        </StyleCulcolator>
    );
};

export default Culcolator;
