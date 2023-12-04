interface Builder {
  produceDesign(): void;
  produceBackend(): void;
  produceFrontend(): void;
  produceDocumentation(): void;
}

class ApplicationsParts {
  public parts: string[] = [];

  public listOfParts() {
    console.log(`Application parts: ${this.parts.join(', ')}\n`);
  }
}

class ApplicationBuilder implements Builder {
  private application!: ApplicationsParts;

  constructor() {
    this.reset();
  }

  private reset() {
    this.application = new ApplicationsParts();
  }

  produceBackend(): void {
    this.application.parts.push('Backend NodeJS');
  }

  produceDesign(): void {
    this.application.parts.push('Design in Sketch');
  }

  produceDocumentation(): void {
    this.application.parts.push('Detailed API Documentation');
  }

  produceFrontend(): void {
    this.application.parts.push('Frontend ReactJS');
  }

  public getApplication(): ApplicationsParts {
    const result = this.application;
    this.reset();

    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public makePresentation(): void {
    this.builder.produceDesign();
  }

  public makeFullProduct(): void {
    this.builder.produceDesign();
    this.builder.produceDocumentation();
    this.builder.produceBackend();
    this.builder.produceFrontend();
  }
}

function run() {
  const director = new Director();
  const application = new ApplicationBuilder();

  director.setBuilder(application);

  console.log('Minimum Application');
  director.makePresentation();
  application.getApplication().listOfParts();

  console.log('Full Application');
  director.makeFullProduct();
  application.getApplication().listOfParts();
}

run();
