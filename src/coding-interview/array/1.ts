interface Solution {
  (arr: number[]): number[];
}   

// 1. 배열 정렬하기
const solution_1: Solution = (arr) =>  arr.slice().sort((a, b) => a - b);

console.log(1, solution_1([3, 4, 2, 5, 1]));
console.log(1, solution_1([1, -5, 2, 4, 3]));
console.log(1, solution_1([2, 1, 1, 3, 2, 5, 4]));
console.log(1, solution_1([1, 6, 7]));

// 2. 배열 제어하기
const solution_2: Solution = (arr) => [...new Set(arr)].sort((a, b) => b - a);

console.log(2, solution_2([4, 2, 2, 1, 3, 4])); 
console.log(2, solution_2([2, 1, 1, 3, 2, 5, 4])); 

// 3. 두 수를 뽑아서 더하기
const solution_3: Solution = (numbers) => [...new Set(numbers.flatMap((x, i) => numbers.slice(0, i).map(y => x + y)))].sort((a, b) => a - b);
// map, flat 함수로 나누는 것을 더 선호하지만 알고리즘 문제는 flatMap 함수를 주로 사용 함.

console.log(3, solution_3([2, 1, 3, 4, 1]));
console.log(3, solution_3([5, 0, 2, 7]));
  
// 4. 모의고사

// 5. 행렬의 곱셈

// 6. 실패율

// 7. 방문 길이