import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import { scopedElementSelectOne } from './util.js'; 

describe('Success screen ',async () => {
  const el=await fixture(`<loan-success></loan-success>`);
  // Write test cases inside this block
  it('should check the element is defined',async()=>{
    expect(el).to.not.be.undefined;
  });
 
  it('should check the heading message',async()=>{
const x=scopedElementSelectOne(el,'h2');
expect(x.innerText).to.equal('!!!');

  });

});

describe('error screen', async() => {
  const el=await fixture(`<loan-error></loan-error>`);
  // Write test cases inside this block
  it('should check the element is defined',async()=>{
    expect(el).to.not.be.undefined;
  });

  it('should check the heading message',async()=>{
    const x=scopedElementSelectOne(el,'h2');
    expect(x.innerText).to.equal('!!');
    
      });
  
});
