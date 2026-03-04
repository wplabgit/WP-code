const user = { name: "Alice", age: 25 };
const clonedUser = { ...user };

console.log(clonedUser);
const address = { country: "USA" };
const mergedUser = { ...user, ...address };

console.log(mergedUser);
