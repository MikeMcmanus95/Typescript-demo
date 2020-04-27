class User {
  // Public, Private, Protected
  private name: string;
  public age: number;
  protected email: string;

  constructor(name: string, email: string, age: number) {
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
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
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

let mike: User = new PremiumMember(1, 'Mike', 'Mike@email.com', 24);
mike.payInvoice();
