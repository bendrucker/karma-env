describe('karma-env', function () {

  it('exposes the configuration as __env', function () {
    expect(window.__env).to.deep.equal({foo: 'bar'});
  });

});
