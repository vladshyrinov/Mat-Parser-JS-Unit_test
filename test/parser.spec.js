var should = require('should');
var assert = require('chai').assert;
var parser = require('../source/parser');

describe('parser spec', function () {
    it('should parser exists', function () {
        should(parser).be.ok;
    });

    it('should return sum', function() {
        should(parser.mathParser("1+2")).equal(3);
    });

    it('should return sum from brackets', function() {
        should(parser.mathParser("(1+2)")).equal(3);
    });

    it('should return decimal sum', function() {
        should(parser.mathParser("1.1+2")).equal(3.1);
    });

    it('should return substraction', function() {
        should(parser.mathParser("3-1")).equal(2);
    });

    it('should return substraction from brackets', function() {
        should(parser.mathParser("(3-1)")).equal(2);
    });

    it('should return decimal substraction', function() {
        should(parser.mathParser("3.1-1")).equal(2.1);
    });

    it('should return multiplication', function() {
        should(parser.mathParser("2*2")).equal(4);
    });

    it('should return multiplication from brackets', function() {
        should(parser.mathParser("(2*2)")).equal(4);
    });
    
    it('should return decimal multiplication', function() {
        should(parser.mathParser("2.1*2")).equal(4.2);
    });

    it('should return division', function() {
        should(parser.mathParser("1/2")).equal(0.5);
    });

    it('should return division from brackets', function() {
        should(parser.mathParser("(1/2)")).equal(0.5);
    });

    it('should return decimal division', function() {
        should(parser.mathParser("1.1/2")).equal(0.55);
    });

    it('should return 25.5 from expression', function() {
        should(parser.mathParser("1/2 + 5 + 4*5")).equal(25.5);
    });

    it('should return 45.5 from expression', function() {
        should(parser.mathParser("1/2 + (5 + 4) * 5")).equal(45.5);
    });

    it('should return 45.5 from expression', function() {
        should(parser.mathParser("1/2    + (5 + 4) * 5")).equal(45.5);
    });

    it('should return 52.52 from expression', function() {
        should(parser.mathParser("1/2 + (5.5 + 4.7) * 5.1")).equal(52.52);
    });

    it('should return -52.52 from expression', function() {
        should(parser.mathParser("-1/2 + (-5.5 - 4.7) * 5.1")).equal(-52.52);
    });

    it('should return rounded to 2 digits number', function() {
        should(parser.mathParser("1+2/3")).equal(1.67);
    });

    it('should return number 0', function() {
        should(parser.mathParser("0")).equal(0);
    });

    it('should return number 18', function() {
        should(parser.mathParser("18")).equal(18);
    });

    it('should return undefined from just one bracket (', function() {
        should(parser.mathParser("(1/2 + 5 + 4*5")).equal(undefined);
    });

    it('should return undefined from wrong sign [', function() {
        should(parser.mathParser("[1/2] + 5 + 4 * 5")).equal(undefined);
    });

    it('should return undefined from wrong sign >', function() {
        should(parser.mathParser("1/2 >> 5 + 4) * 5")).equal(undefined);
    });

    it('should return undefined from letter', function() {
        should(parser.mathParser("1/2 + 5a + 4b * 5")).equal(undefined);
    });

    it('should return undefined from word', function() {
        should(parser.mathParser("trololo")).equal(undefined);
    });

});