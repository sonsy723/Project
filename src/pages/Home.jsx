import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MonthNavigation from "../components/MonthNavigation";
import ExpenseList from "../components/ExpenseList";
import CreateExpense from "../components/CreateExpense";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home({ expenses, setExpenses }) {
  const [month, setMonth] = useState(1);

  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  const navigate = useNavigate();

  return (
    <Container>
      <h1>까꼐뿌</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </button>
      <MonthNavigation month={month} setMonth={setMonth} />
      <CreateExpense
        month={month}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
}
