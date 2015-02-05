describe('smileme form page todo list', function() {

	var message = element(by.css('div.text-center'));

  it('should send a message', function() {
    browser.get('http://app-smileme.herokuapp.com/portada.html#/contact');

    expect(message.isDisplayed()).toBe(false);

    element(by.model('nombre')).sendKeys('Test E2E');
    element(by.model('email')).sendKeys('teste2e@protractor.com');
    element(by.model('telefono')).sendKeys('123456789');
    element(by.model('texto')).sendKeys('Prueba de E2E con Protractor.')
    element(by.tagName('button')).click();

    expect(message.isDisplayed()).toBe(true);

  });
});
