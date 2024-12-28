function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

user.forEach(name => {
  console.log(greeter(name));
});