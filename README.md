# Problem-1: Three-ways-sum-to-n ( Time Consumption :45p)

Analyze

Input: n is any interger and n is always produce a result lesser than Number.MAX_SAFE_INTEGER.

Output : return (1+2+3+4.....n)

Approach

+ Constraints for all 3 functions:

+ Since n can be any integer, if n < 0, the sum  1+2+...+n does not make sense.

+ Therefore, we handle it by returning 0 or displaying an error message.

+ Additionally, we need to check whether n is an integer.

Example: n = 2.4 or n <= 0 → error, return 0

+ function sum_to_n_a : I use a brute-force althorim that has the complexity is O(n)

+ sum_to_n_b : I notice that (1 + 2 .... +n) = ( n * (n+1))/2 so I just return  (n * (n + 1)) / 2 with  the complexity is O(1)

+ sum_to_n_c :

Initially, I wanted to create a global array to store previous computed result for n = 1 → n = MAX_SAFE_INTEGER, but memory limitations does't allow this.

Therefore, I choose a diferent way that is Map<number, number> to store previously computed sums. Ideal of this appoarch is that allows computing sums lazily and avoids recalculating sums for the same n.

+ Initialize a global Map is {0,0} which meaning n = 0 -> result -> 0

+ For each query n, we compute sums only if they haven’t been computed before. If n is computed previously that algorithm complexity is O(1), otherwise it is O(n)

+ Previously computed sums are stored in the Map for future use.

Example : 
Suppose we will calculate n values for a set of queries: 5, 10, 5 and then Map after computation: {0=>0, 1=>1, 2=>3, 3=>6, 4=>10, 5=>15} -> maxComputed = 5
When we query n = 10 that compute sums from 6 → 10, using Map for previous results
Map after computation: {0=>0, 1=>1, 2=>3, 3=>6, 4=>10, 5=>15, 6=>21, 7=>28, 8=>36, 9=>45, 10=>55} and We can save time for future queries with O(1)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Problem-2: 

