export default function SortArrayDescending({ arr }) {
    // we can use the sort() method to sort the array in descending order.
    // let sortedArr = arr.sort((a, b) => b - a);
  let sortedArr = [...arr].sort((a, b) => b - a);
  return <div>Sort Array Descending: {sortedArr.join(", ")}</div>;
}
