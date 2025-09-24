
// Using Brute-force
// Complexity: O(n)
function sum_to_n_a(n: number): number {
  if (!Number.isInteger(n)) {
    console.error("n must be an integer");
    return 0;
  }

  if (n <= 0) {
    console.error("n must be greater than 0");
    return 0;
  }

  let sumation = 0;
  for (let i = 1; i <= n; i++) {
    sumation += i;
  }
  return sumation;
}

// using the mathematical formula : 1+2+3+....+n = (n * (n+1)) /2
// Complexity: O(1)
function sum_to_n_b(n: number) {

  if (n <= 0) {
    console.error(("n is not valid"));
    return 0;
  }

  let sumation: number = 0; // result

  if (!Number.isInteger(n)) {
    console.error("n must be integer")
    return 0;
  }

  sumation = (n * (n + 1)) / 2;

  return sumation;
}


// using a array to store many precious results
// Complexity: O(n) 

const prefix_sum_map = new Map<number, number>();

prefix_sum_map.set(0, 0);

function sum_to_n_c(n: number): number {

  if (!Number.isInteger(n)) {
    console.error("n must be integer")
    return 0;
  }

  if (n <= 0) {
    console.error("n need to be larger than 0");
    return 0;
  }

  // If n is computed that we just need to return
  if (prefix_sum_map.has(n)) {
    return prefix_sum_map.get(n)!;
  }

  // Finding previous result 
  let maxComputed = Math.max(...prefix_sum_map.keys());

  //  maxComputed + 1 đến n
  for (let i = maxComputed + 1; i <= n; i++) {
    const prev = prefix_sum_map.get(i - 1)!;
    prefix_sum_map.set(i, prev + i);
  }

  return prefix_sum_map.get(n)!;
}

type TestCase = { n: number };

const testCases: TestCase[] = [
  { n: 0 },
  { n: 3 },
  { n: 5 },
  { n: 6 },
  { n: 2.4 },
  { n: -3 }
];



function test() {

  testCases.forEach((tc, index) => {
    console.log(`\nTestcase ${index + 1}: n=${tc.n}`);


    const r1 = sum_to_n_a(tc.n);

    const r2 = sum_to_n_b(tc.n);


    const r3 = sum_to_n_c(tc.n);


    console.log(`Results: sumation_a = ${r1}, sumation_b = ${r2}, sumation_c = ${r3}`);

  });
}


test()
