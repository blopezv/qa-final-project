const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('request-promise')

let carrierId;
let resultResponse;
Given('Datos del Carrier con id {int}', function (id) {
    carrierId = id;
});

When('Envio estos datos con DELETE a ReconLogistics', async function () {
    let options = {
        method: 'Delete',
        uri: 'http://localhost:54734/api/carriers/' + carrierId,
        json: true,
        resolveWithFullResponse: true
    };

    await request(options)
        .then(function (response) {
            resultResponse = response;
        })
        .catch(function (error) {
            resultResponse = error;
        });
});

Then('El servidor responde con estado {int}', function (code) {
    expect(resultResponse.statusCode).to.eql(code);
});

Then('La respuesta contiene la Description {string}', function (description) {
    expect(resultResponse.body.errorMessagesFromService[0].description).to.eql(description);
});