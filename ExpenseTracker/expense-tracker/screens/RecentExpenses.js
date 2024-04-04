import { Text } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
import { getDateMinusDay } from "../util/date";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallback="No expenses registered for the last 7 days"
    />
  );
}
