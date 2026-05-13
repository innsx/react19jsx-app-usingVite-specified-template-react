

export default function SortStringReverse({ arr }) {
  // we can use the sort() method to sort the array in descending order.
  // let sortedArr = arr.sort((a, b) => b - a);
  let sortedArr = [...arr].sort().reverse();

  return <div>Sort String Reverse: {sortedArr.join(", ")}</div>; 
}
