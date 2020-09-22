/* eslint-disable no-use-before-define */
import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { Form, Repositories, Title } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/8837683?s=460&u=d0df7da48790e8b183d90e87ca0046c372f2c583&v=4"
            alt="Avatar"
          />
          <div>
            <strong>lucag</strong>
            <p>Software Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/8837683?s=460&u=d0df7da48790e8b183d90e87ca0046c372f2c583&v=4"
            alt="Avatar"
          />
          <div>
            <strong>lucag</strong>
            <p>Software Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/8837683?s=460&u=d0df7da48790e8b183d90e87ca0046c372f2c583&v=4"
            alt="Avatar"
          />
          <div>
            <strong>lucag</strong>
            <p>Software Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
