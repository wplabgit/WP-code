const nums = [1, 2, 3, 4];

console.log(nums.map(n => n * 2));
console.log(nums.filter(n => n % 2 === 0));
console.log(nums.reduce((sum, n) => sum + n, 0));