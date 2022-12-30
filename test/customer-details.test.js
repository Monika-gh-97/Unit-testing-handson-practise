import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import { scopedElementSelectOne } from './util.js';
describe('customer details', async() => {
  // Write test cases inside this block
  const el=await fixture(`<customer-details></customer-details>`);
  it('should check the required elements',async()=>{
    const a=scopedElementSelectOne(el,"#first_name");
    const b=await a.validators[2]._getMessage();
  expect(b).to.equal('First name is a required field');
  });
  it('should check the required elements',async()=>{
    const d=scopedElementSelectOne(el,"#last_name");
    const c=await d.validators[2]._getMessage();
  expect(c).to.equal('Last name is a required field');
  });
  it('should check the required elements',async()=>{
    const e=scopedElementSelectOne(el,"#email");
    const f=await e.validators[1]._getMessage();
  expect(f).to.equal('E-mail is a required field');
  });
});

