export default function SortArrayAscending({ arr }) {
  // we can use the sort() method to sort the array in ascending order.
  // let sortedArr = arr.sort((a, b) => a - b);

  // we use the spread operator to create a new array and sort it, so that we don't mutate the original array.
  let sortedArr = [...arr].sort((a, b) => a - b);

  return <div>Sort Array Ascending: {sortedArr.join(", ")}</div>;
}
