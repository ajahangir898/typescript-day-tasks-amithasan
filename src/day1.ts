// Define the User interface
interface User {
  name: string;       // required
  email: string;      // required
  phone?: string;     // optional
  active?: boolean;   // optional
}

// Example: using the interface
const user1: User = {
  name: "John Doe",
  email: "john@example.com"
};

const user2: User = {
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "+880123456789",
  active: true
};

console.log(user1);
console.log(user2);
