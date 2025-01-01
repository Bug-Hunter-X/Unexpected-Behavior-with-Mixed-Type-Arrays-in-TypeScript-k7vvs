# TypeScript Mixed-Type Array Bug

This repository demonstrates an uncommon bug related to mixed-type arrays in TypeScript.  Specifically, it highlights issues that can arise when iterating through an array containing elements of various types, especially when strict type checking is enabled.

## The Bug

The core problem lies in the interaction between TypeScript's type inference and how it handles arrays with heterogeneous types.  While TypeScript generally allows arrays of mixed types (using `any[]` or a union type like `(string | number)[]`), strict type checking can lead to unexpected behavior or compilation errors if not handled carefully, particularly when accessing array elements within a loop.

## How to Reproduce

1. Clone this repository.
2. Open the `bug.ts` file.
3. Observe the comments and the example array `myMixedArray`. 
4. Compile and run the code.
5. If your TypeScript compiler is configured with `strictNullChecks: true`, you may encounter an error or unexpected results. 

## Solution

The `bugSolution.ts` file demonstrates a safer approach, using type guards or type assertions to handle mixed types explicitly.