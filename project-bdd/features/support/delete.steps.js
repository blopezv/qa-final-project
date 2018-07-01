const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('request-promise')

Given('Datos del Carrier con id {int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    expect(true).to.eq(true);
});

When('Envio estos datos con POST a ReconLogistics', function () {
    // Write code here that turns the phrase above into concrete actions
    expect(true).to.eq(true);
});

Then('El servidor responde con estado {int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    expect(true).to.eq(true);
});

Then('La respuesta contiene el Description {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    expect(true).to.eq(true);
});