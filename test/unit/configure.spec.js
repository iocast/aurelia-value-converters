import {configure} from '../../src/index';

class ConfigStub {
  globalResources(...resources) {
    this.resources = resources;
  }
}

describe('the Aurelia configuration', () => {
  var mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    configure(mockedConfiguration);
  });

  it('should register a global resource', () => {
    expect(mockedConfiguration.resources).toContain('./datetime');
    expect(mockedConfiguration.resources).toContain('./filter');
    expect(mockedConfiguration.resources).toContain('./sort');
    expect(mockedConfiguration.resources).toContain('./string-length');
  });

});
