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

// 3. 두 수를 뽑아서 더하기

// 4. 모의고사

// 5. 행렬의 곱셈

// 6. 실패율

// 7. 방문 길이