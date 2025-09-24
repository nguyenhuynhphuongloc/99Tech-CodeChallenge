

const MAX_N = Number.MAX_SAFE_INTEGER

// Using Brute-force
// Complexity: O(n)
function sum_to_n_a(n: number): number {

  let sumation: number = 0; // result

  if (n <= 0 || n > MAX_N) {
    console.error(("n is not valid"));
    return sumation;
  }


  for (let i = 1; i <= n; i++) {
    sumation += i;
  }
  return sumation;
}

// using the mathematical formula : 1+2+3+....+n = (n * (n+1)) /2
// Complexity: O(1)
function sum_to_n_b(n: number) {

  let sumation: number = 0; // result

if (n <= 0 || n > MAX_N) {
    console.error(("n is not valid"));
    return sumation;
  }


  sumation = (n * (n + 1)) / 2;

  return sumation;
}


// using a array to store many precious results
// Complexity: O(n) 

const prefix_sum_map = new Map<number, number>();

prefix_sum_map.set(0, 0);

function sum_to_n_c(n: number): number {

  if (n <= 0 || n > MAX_N) {
    console.error("n is not valid");
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
  { n: 1 },
  { n: 5 },
  { n: 10 },
  { n: 100 },
  { n: -3 }
];



function main() {

  testCases.forEach((tc, index) => {
    console.log(`\nTestcase ${index + 1}: n=${tc.n}`);

  
    const r1 = sum_to_n_a(tc.n);
   

   
    const r2 = sum_to_n_b(tc.n);
    

   
    const r3 = sum_to_n_c(tc.n);
   

    console.log(`Results: sumation_a = ${r1}, sumation_b = ${r2}, sumation_c = ${r3}`);
  
  });
}

main();
