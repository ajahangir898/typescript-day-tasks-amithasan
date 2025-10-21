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


// ...existing code...
interface User {
    id: number;
    name: string;
    email: string;
}

// Readonly<User> makes all properties read-only
const user: Readonly<User> = { id: 1, name: 'Alice', email: 'alice@example.com' };
// user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property

// Partial<User> makes all properties optional — great for update forms
function updateUser(original: User, changes: Partial<User>): User {
    return { ...original, ...changes };
}

const updated = updateUser(user as User, { email: 'alice@new.com' });

// Example form state using Partial<User>
const updateForm: Partial<User> = {}; // start empty, fill as user edits
updateForm.name = 'Alice Cooper'; // allowed

console.log(user, updated, updateForm);

// unknown type to string type conversion
let input: unknown = 'Hello TypeCript';
// Unsafe cast using 'as' keyword
let unsafeString = input as string;
console.log('unsafe Cast:', unsafeString.toUpperCase());

// Safe type checking before casting
if (typeof input=== 'string') {
    let safeString = input as string;
    console.log('Safe String:', safeString.toUpperCase());
}

// Function of unknown type to string
function handleValue(value: unknown) {
    if (typeof value  === 'string') {
        const result = (value as string).trim();
        console.log('trinmed String:', result);
    }
    else {
        console.log('Not a String value:', value);
    }
}

handleValue('       amit hasan   ')
