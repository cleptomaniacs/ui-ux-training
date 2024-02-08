class Greeting {
  message: string;
  setMessage(message: string): void {
    this.message = message;
  }

  display(): void {
    console.log(this.message);
  }
}

var greet = new Greeting();
greet.setMessage("Hello, world!");
greet.display();
