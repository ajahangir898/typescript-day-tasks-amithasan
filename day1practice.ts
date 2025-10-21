interface User {
    name: string;
    email: string;
    phone?: string;
    active?: boolean;
}

const user1: User = {
    name: "amit hasan",
    email: "amit@gmail.com",
};

const user2: User = {
    name: "Maruf Mojumdar",
    email: "maruf.dev@gmai.com",
    phone: "880123456789",
    active: true
};
