import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../loan-application.js';
import '../src/dashboard/Dashboard-menu.js';
//var myObj=require('../loan-application.js').LoanApplication;
const el=await fixture(` <dash-board> </dash-board>`)
describe('LoanApplication', async() => {
 

  it('should element exist',()=>{
   
    expect(el).to.not.be.undefined;
    });
it('should check the menu div element',async()=>{
  const x=await fixture(`<div class="card"></div>`);
expect(x).to.not.be.undefined;
});
it('should check the menu div element',async()=>{
  const y=await fixture(`<div class="container"></div>`);
expect(y).to.not.be.undefined;

}); 
});

 
