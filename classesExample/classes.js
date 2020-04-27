class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ', this.name);
    }
    getName() {
        return this.name;
    }
    payInvoice() {
        console.log(this.name + ' has paid invoice');
    }
}
class PremiumMember extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
        console.log(this.email + ' is now a premium member.');
    }
    payInvoice() {
        super.payInvoice();
    }
}
// let john = new User('John', 'john@email', 23);
// console.log(john.getName());
// console.log(john.age);
let mike = new PremiumMember(1, 'Mike', 'Mike@email.com', 24);
mike.payInvoice();
