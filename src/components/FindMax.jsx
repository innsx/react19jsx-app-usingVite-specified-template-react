export default function FindMax({ arr }) {
  let max = -Infinity;
  let len = arr.length;

  // loop through the array from the end to the beginning
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  } 

  return <div>MaxValue: {max}</div>;
}



// export default function FindMax({ arr }) {
//   let max = -Infinity;

//   // loop through the array from the beginning to the end
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return <div>MaxValue: {max}</div>;
// }



// export default function FindMax() {
//   let max = -Infinity;
//   const arr = [11, 52, 37, 41, 5];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return <div>FindMax: {max}</div>;
// }
