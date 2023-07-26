document.getElementById("myButton").onclick = () => {
  let arr;
  try {
    arr = JSON.parse(document.getElementById("myArray").value);
    if (!Array.isArray(arr)) {
      document.getElementById("result").innerText =
        "Please, insert a correct array";
      return;
    }
  } catch (error) {
    document.getElementById("result").innerText =
      "Please, insert a correct array";
    return;
  }
  console.log(arr);
  document.getElementById("result").innerText = "[" + sortEvenNOdd(arr) + "]";
};

function sortEvenNOdd(arr) {
  const arrCopy = [...arr];
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (!isEven(arrCopy[i])) {
      // A[i] is odd
      if (isEven(arrCopy[j])) {
        // A[j] is even
        // Swap A[i] and A[j]
        arrCopy[j] = arrCopy[j] + arrCopy[i];
        arrCopy[i] = arrCopy[j] - arrCopy[i];
        arrCopy[j] = arrCopy[j] - arrCopy[i];
      }
      j--;
    } else i++;
  }
  return arrCopy;
}
function isEven(number) {
  return !(number & 1);
}

// Test code if you want to run the js script
const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sortEvenNOdd(arrayToSort));
