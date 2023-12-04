class Singleton {
  private static instance: Singleton;

  getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

new Singleton().getInstance();
