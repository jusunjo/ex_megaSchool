import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { remove } from "../modules/todo";

const StyleTodoItem = styled.div`
    margin: 10px;

    margin-bottom: 15px;
    margin-left: 0;
    display: flex;
    background-color: #78909c;
    padding: 10px;
    padding-left: 5px;
    width: 340px;
    border-radius: 10px;
`;
const Checkbox = styled.input`
    width: 20px;
    height: 23px;
    margin-top: 0;
    margin-right: 10px;
`;
const Todo = styled.div`
    font-family: "Jua", sans-serif;
    font-size: 20px;
    color: #eeeeee;
    margin: 0;
    margin-left: 10px;
`;
const Button = styled.button`
    font-family: "Jua", sans-serif;
    cursor: pointer;
    margin: 0;
    width: 25px;
    height: 25px;
    margin-left: 310px;
    border-radius: 10px;
    border: 0.5px solid gray;
    position: absolute;
    &:hover {
        background-color: #bcbcbc;
    }
`;
const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <StyleTodoItem>
            {/* <Checkbox type="checkbox"></Checkbox> */}
            <Todo>{todo.text}</Todo>
            <Button onClick={() => dispatch(remove(todo.id))}>X</Button>
        </StyleTodoItem>
    );
};

export default TodoItem;
