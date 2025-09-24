# Problem-1: Three Ways to Sum to n (Estimated Time: 45 min)

## Analysis

### Input
`n` is an integer such that the sum `1 + 2 + ... + n` does not exceed `Number.MAX_SAFE_INTEGER`.

### Output
Return the sum of integers from `1` to `n`.

### Approach

#### Constraints for all 3 functions
- Since `n` must be a positive integer, if `n < 1`, the sum `1 + 2 + ... + n` is undefined.
- Therefore, we handle it by returning `0` or displaying an error message.
- We also need to check that `n` is an integer.

**Example:**  
If `n = 2.4` or `n <= 0`, return `0` or display an error.

---

### Functions

#### 1. `sum_to_n_a`
- I use a brute-force algorithm that iterates from 1 to `n` and accumulates the sum.  
- **Time Complexity:** O(n)

#### 2. `sum_to_n_b`
- I noticed that the sum can be computed directly using the formula:  
\[
1 + 2 + ... + n = \frac{n \cdot (n + 1)}{2}
\]  
- So I simply return `(n * (n + 1)) / 2`.  
- **Time Complexity:** O(1)

#### 3. `sum_to_n_c`
- Initially, I wanted to create a global array to store previously computed results for `n = 1` to `MAX_SAFE_INTEGER`, but memory limitations do not allow this.  
- Therefore, I chose a different approach using a `Map<number, number>` to store previously computed sums.  
- This approach allows lazy computation and avoids recalculating sums for the same `n`.

**Implementation Details:**
- Initialize a global Map as `{0 => 0}`, meaning `n = 0` maps to `result = 0`.  
- For each query `n`, compute sums only if they have not been computed before.  
  - If `n` has been computed previously, the algorithm runs in O(1).  
  - Otherwise, it runs in O(n).  
- Previously computed sums are stored in the Map for future use.

**Example:**  
Suppose we calculate sums for a set of queries: `5, 10, 5`.  

1. After the first query (`n = 5`), the Map is:  
   `{0 => 0, 1 => 1, 2 => 3, 3 => 6, 4 => 10, 5 => 15}`  
   and `maxComputed = 5`.

2. For the next query (`n = 10`), sums from 6 to 10 are computed using the Map. After this, the Map is:  
   `{0 => 0, 1 => 1, 2 => 3, 3 => 6, 4 => 10, 5 => 15, 6 => 21, 7 => 28, 8 => 36, 9 => 45, 10 => 55}`  

Future queries can then be answered in O(1) time.


## How to run

1. CD THREE-WAYS-TO-SUM-N

2. npx ts-node problem1.ts in terminal