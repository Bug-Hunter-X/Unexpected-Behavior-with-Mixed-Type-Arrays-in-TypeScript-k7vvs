function printArraySafe(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === 'string') {
      console.log(`String: ${element}`);
    } else if (typeof element === 'number') {
      console.log(`Number: ${element}`);
    } else if (typeof element === 'boolean') {
      console.log(`Boolean: ${element}`);
    } else if (typeof element === 'object') {
      console.log(`Object:`, element);
    } else {
      console.log(`Unknown type:`, element);
    }
  }
}

const myMixedArray = [1, 'hello', true, { name: 'John' }];
printArraySafe(myMixedArray); //Handles mixed types safely