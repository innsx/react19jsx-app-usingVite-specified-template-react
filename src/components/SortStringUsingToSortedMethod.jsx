

export default function SortStringUsingToSortedMethod({ arr }) {
  // we can use the toSorted() method to sort the array in ascending order.
  // the toSorted() method returns a new sorted array without mutating the original array.
  let sortedArr = [...arr].toSorted();

  return <div>Sort String Using toSorted Method: {sortedArr.join(", ")}</div>;
}
