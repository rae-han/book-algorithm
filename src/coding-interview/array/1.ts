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
const patterns = [
  [1, 2, 3, 4, 5],           // 1번 수포자의 찍기 패턴
  [2, 1, 2, 3, 2, 4, 2, 5],   // 2번 수포자의 찍기 패턴
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자의 찍기 패턴
];

const solution_4_factory = (patterns) => (answers) => {
  const initialScores = Array.from({length: patterns.length}).fill(0);

  const finalScores = answers.reduce((scores, answer, i) => {
    const remaining = answers.length - i;
    const currentGlobalMax = Math.max(...scores);

    return scores.map((score, j) =>
      (score + remaining < currentGlobalMax)
        ? score
        : (answer === patterns[j][i % patterns[j].length] ? score + 1 : score)
    );
  }, initialScores);

  const maxScore = Math.max(...finalScores);
  
  return finalScores.reduce((result, score, idx) =>
    score === maxScore ? result.concat(idx + 1) : result, []
  );
};
// 시간 여유가 있다면 patterns 값을 각각 무한 배열(제너레이터 이용)로 만들어서 인덱스 별로 하나씩 꺼내가며 문제를 풀 것.
function* generator(array) {
  while (true) { // 무한 반복
    for (const value of array) {
      yield value;
    }
  }
}
// 각 수포자를 배열로 넣어 남은 문제를 다 맞춰도 가장 높은 사람모다 못푼다면 배열에 넣지 않을 듯.
// 사실 문제에서 answers 값을 0부터 10,000 문제로 잡았기 때문에 대충 풀어도 다 됨. 어떤 회사냐에 따라 다르게 풀 듯.

const solution_4 = solution_4_factory(patterns);

console.log(4, solution_4([1, 2, 3, 4, 5]));
console.log(4, solution_4([1, 3, 2, 4, 2]));

// 5. 행렬의 곱셈
// const solution_5 = (arr1, arr2) => {
//   return arr1.map(row => arr2.map((_, colIndex) => row.reduce((sum, value, i) => sum + value * arr2[i][colIndex], 0)));
// }
// 이런 방법도 있지만 행렬 곱셈은 패턴이 있어서 그냥 전치 행렬 만들어서 계산하게 할 듯.

// 전치
const transpose = (matrix) =>
  matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
// 내적
const dot = (row, col) =>
  row.reduce((sum, value, idx) => sum + value * col[idx], 0);
const solution_5 = (arr1, arr2) => arr1.map(row => transpose(arr2).map(col => dot(row, col)));


console.log(5, solution_5([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
console.log(5, solution_5([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));

// 6. 실패율

// 7. 방문 길이