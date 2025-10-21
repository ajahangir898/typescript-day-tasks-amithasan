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


// Print Value Function
function printValue(value:number | string): void {
    if (typeof value === "number") {
        console.log("Number value:", value);
        console.log("Double:", value * 2);
    } else if (typeof value === "string") {
        console.log("string value:", value);
        console.log("Uppercase:", value.toUpperCase());
    } else {
        console.log("Unknown type");
    } 
} 

printValue(20);
printValue('hello world');

// Array & Object Typing
type product = {
     name: string;
     price: number;
     inStock: boolean;
};

const products: product[] = [
    {name: 'laptop', price: 1200, inStock: true},
    {name: 'headphones', price: 150, inStock: false},
    {name: 'keyboard', price: 90, inStock: true},
];

products.forEach((p) => {
        console.log(`${p.name} - ${p.price} dollars (${p.inStock ? 'In Stock' : 'Out of Stock'})`)
});

// get fist item of an array fuction

function getFirstItem<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  return arr[0]!;
}


const number = [10, 20, 30];
const firstNumber = getFirstItem(number);

const name = ['amit', 'hasan', 'habibee'];
const firstName = getFirstItem(name);

console.log(firstNumber);
console.log(firstName);
