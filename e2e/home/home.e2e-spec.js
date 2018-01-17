"use strict";

describe('Treasy', function () {
	var logo = element(by.tagName('picture'));
	var busca = element(by.model('query'));
	var form = element(by.css('.modal-open'));

	var btn_salvar = element(by.id('btn_salvar'));
	var btn_cancelar = element(by.id('btn_cancelar'));

	var btn_toggle = element(by.id('btn_toggle'));
	var btn_cadastrar_no_pai = element(by.id('btn_cadastrar_no_pai'));
	var nodes = element.all(by.repeater('node in data'));

	beforeAll(() => {
		browser.get('http://localhost:8080/');
	});

	it('should have treasy logo', function () {
		expect(logo.isDisplayed()).toBeTruthy();
	});

	it('should have a search field', () => {
		busca.sendKeys('write');
		expect(busca.getAttribute('value')).toEqual('write');
	});

	it('should open a form to add new node', () => {
		btn_cadastrar_no_pai.click();
		expect(form.isDisplayed()).toBeTruthy();
		btn_cancelar.click();
		expect(form.isPresent()).toBe(false);
		// browser.pause();
	});

	it('should have nodes', () => {
		// console.log(nodes.count());
		// browser.pause();
		expect(nodes.count()).toEqual(1);
	});

});
