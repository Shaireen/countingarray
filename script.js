let i = 0;
const array = [];
countingArray();

function countingArray() {
  if (i > -1) {
    array.unshift(i);
    if (array.length > 9) {
      array.pop();
    }
    console.log(array);
    i++;
    setTimeout(countingArray, 1000);
  }
}
