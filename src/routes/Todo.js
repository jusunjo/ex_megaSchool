import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { insert } from "../modules/todo";
import TodoItem from "./TodoItem";

const StyleTodo = styled.div`
    width: 500px;
    height: 700px;
    margin: auto;
    margin-top: 150px;
    display: flex;
    background-color: #a7c0cd;
    border-radius: 20px;
`;

const AllTodo = styled.div`
    margin: auto;
    margin-top: 50px;
`;

const Form = styled.form`
    margin-bottom: 40px;
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 15px;
    margin-right: 10px;
    font-family: "Jua", sans-serif;
    font-size: 18px;
    border: none;
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    height: 47px;
    width: 50px;
    font-family: "Jua", sans-serif;
    border-radius: 10px;
    cursor: pointer;
    background-color: #4b636e;
    color: white;
    border: none;
`;

const Todo = () => {
    const todos = useSelector((todo1) => todo1.todo.todolist);
    const dispatch = useDispatch();
    const [save, setSave] = useState("");

    const handleChange = (e) => {
        setSave(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSave("");
    };

    const handleClick = () => {
        if (save !== "" && save.length < 20 && todos.length < 9) {
            dispatch(insert(save));
        } else {
            alert("할 일을 입력하시거나 20자 이하로 작성해주세요");
        }

        console.log(todos.length);
    };

    return (
        <StyleTodo>
            <AllTodo>
                <Form onSubmit={handleSubmit}>
                    <Input onChange={handleChange} value={save}></Input>
                    <Button onClick={handleClick}>Enter</Button>
                </Form>
                <div>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </div>
            </AllTodo>
        </StyleTodo>
    );
};

export default Todo;
