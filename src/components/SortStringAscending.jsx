export default function SortStringAscending({ arr }) {
  // we can use the sort() method to sort the array in ascending order.
  // the sort() method sorts the array in place and returns the sorted array.
  let sortedArr = [...arr].sort();

  // we use the spread operator to create a new array and sort it, so that we don't mutate the original array.
  // for strings, the sort() method sorts the array in ascending order by default, so we don't need to pass a compare function.

  //sortedArr.join(", ") converts the sorted array into a string with each element separated by a comma and a space.
  return <div>Sort String Ascending: {sortedArr.join(", ")}</div>;
}
