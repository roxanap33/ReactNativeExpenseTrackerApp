import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function ManageExpenses({ route, navigation }) {
  const editedtExpenseId = route.params?.expenseId;
  const isEditing = !!editedtExpenseId; //convert a value into a boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpenses</Text>;
}
