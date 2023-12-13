interface Implementation {
  print(): string;
}

class Abstraction {
  constructor(
    protected implementation: Implementation
  ) {};

  public operation(): string {
    const result = this.implementation.print();

    return `Abstraction: Base operation with: \n${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.print();

    return `ExtendedAbstraction: Extended operation with \n${result}`;
  }
}

class BlackColor implements Implementation {
  public print(): string {
    return `Detail has been painted in black color`;
  }
}

class WhiteColor implements Implementation {
  public print(): string {
    return `Detail has been painted in white color`;
  }
}

// --------------------------------------------------

function runCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation = new BlackColor();
let abstraction = new Abstraction(implementation);

runCode(abstraction);

console.log('==================================');

implementation = new WhiteColor();
abstraction = new ExtendedAbstraction(implementation);

runCode(abstraction);

export {};
