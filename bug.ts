function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); //This will work fine

const myArray2: (string | number)[] = ["hello", 1, 2, "world", 3];
printArray(myArray2); //This will also work fine

const myArray3: (string | number | boolean)[] = ["hello", 1, 2, "world", 3, true];
printArray(myArray3); //This will also work fine

const myArray4: any[] = ["hello", 1, 2, "world", 3, true, {a:1}];
printArray(myArray4); //This will also work fine

const myMixedArray = [1, 'hello', true, { name: 'John' }];
printArray(myMixedArray); //This may throw error if TS compiler is set to strictNullChecks: true