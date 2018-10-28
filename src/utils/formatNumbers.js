export function getDollars(number) {
  const arr = number.split(".");
  return arr[0];
}

export function getCents(number) {
  const arr = number.split(".");
  return arr[1];
}
