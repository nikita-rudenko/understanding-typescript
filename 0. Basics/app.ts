function combine(
  input1: number,
  input2: number,
  resultType: "as-number" | "as-string"
) {
  if (resultType === "as-number") {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

combine(1, 2, "as-number");
