interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation() {
    const product = this.factoryMethod();

    return `The creator works with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'Result of ConcreteProduct1';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return 'Result of ConcreteProduct2';
  }
}

// ------------------------------------
function run(creator: Creator) {
  return creator.someOperation();
}

console.log(run(new ConcreteCreator1()));
console.log(run(new ConcreteCreator2()));

export {};
