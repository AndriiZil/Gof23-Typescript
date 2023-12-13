class ApiVersion1 {
  public request(): void {
    return console.log(`Simple Request has been made`);
  }
}

class ApiVersion2 {
  public specificRequest(): void {
    return console.log(`Specific Request has been made.`);
  }
}

class RequestsAdapter extends ApiVersion1 {
  private apiVersion: ApiVersion2;

  constructor(apiVersion: ApiVersion2) {
    super();
    this.apiVersion = apiVersion;
  }

  public request() {
    this.apiVersion.specificRequest();
  }
}

// ------------------------------------

function runCode(target: ApiVersion1) {
  target.request();
}

const apiV1 = new ApiVersion1();
const apiV2 = new ApiVersion2();

runCode(apiV1);
runCode(new RequestsAdapter(apiV2));
