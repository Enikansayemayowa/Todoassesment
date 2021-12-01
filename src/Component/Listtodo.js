import React, { useState } from "react";
import styled from "styled-components";
import "./todo.css";

function Listtodo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: todo,
        isCompleted: false,
      };

      setTodoList([...todoList, taskDetails]);
    }
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();

    const element = todoList.findIndex((elem) => elem.id === id);

    const newTaskList = [...todoList];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTodoList(newTaskList);
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter((r) => r.id !== id));
  };

  return (
    <Container>
      <Input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add your task"
      />
      <Button className="add-btn" onClick={handleSubmit}>
        Add
      </Button>

      <br />
      {todoList !== [] ? (
        <ul>
          {todoList.map((data, i) => (
            <Wrapper key={i} className={data.isCompleted ? "crossText" : ""}>
              <Card>
                <Data>{data.value}</Data>
                <Button1 onClick={(e) => taskCompleted(e, data.id)}>
                  Completed
                </Button1>

                <Button1 onClick={(e) => deletetask(e, data.id)}>
                  Delete
                </Button1>
              </Card>
            </Wrapper>
          ))}
        </ul>
      ) : null}
    </Container>
  );
}

export default Listtodo;

const Card = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  display: flex;
  // justify-content:center;
  align-items: center;
`;
const Data = styled.div`
  width: 400px;
  font-size: 20px;
  margin-left: 10px;
`;
const Button1 = styled.button`
  height: 40px;
  width: 70px;
  border: 4px solid teal;
  border-radius: 5px;
  color: white;
  background-color: teal;
  font-size: 13px;
  margin-left: 10px;
`;
const Button = styled.button`
  height: 50px;
  width: 90px;
  border: 4px solid teal;
  border-radius: 5px;
  color: white;
  background-color: teal;
  font-size: 17px;
`;
const Input = styled.input`
  height: 50px;
  width: 400px;
  outline: 0;
  border: 4px solid teal;
  border-radius: 5px;
  margin: 20px;

  ::placeholder {
    font-size: 20px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  border: 3px solid teal;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 700px;
  // height:500px;
  // background-color:teal;
  display: flex;
  flex-direction: column;
  // justify-content:center;
  align-items: center;
`;
