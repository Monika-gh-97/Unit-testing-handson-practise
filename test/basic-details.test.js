import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import  {scopedElementSelectOne} from './util.js';

const assert="referee.assert";

import { Required } from '@lion/form-core';

  describe('Basic details', async() => {
    const el = await fixture(`<basic-details></basic-details> `);  
   
      it('should check the element',async()=>{
        expect(el).to.not.be.undefined;
      });
      it('should check the element',async()=>{
        const y=scopedElementSelectOne(el,'#btn-next btn');
        expect(y).to.not.be.undefined;
      });
    
    
      it('should check the required validation',async()=>{
        const a=scopedElementSelectOne(el,'#type');
        const b=await a.validators[0]._getMessage();
      expect(b).to.equal('Type is a required field');
      });
      it('should check the required validation',async()=>{
        const i=scopedElementSelectOne(el,'#amount');
        const j=await i.validators[0]._getMessage();
      expect(j).to.equal('Should enter an amount greater than ten thousand ');
      });
      it('should check the required validation',async()=>{
        const q=scopedElementSelectOne(el,'#amount');
       const k=await q.validators[1]._getMessage();
      expect(k).to.equal('Should enter an amount less than ten crore ');
      });
      it('should check the required validation',async()=>{
        const r=scopedElementSelectOne(el,'#amount');
        const l=await r.validators[2]._getMessage();
       expect(l).to.equal('Amount is a required field');
       });

 
       it('should check the  toDashboard method', async () => {
        const checkfun = Sinon.stub(el, '_toDashboard');
        el.requestUpdate();
        await el.updateComplete;
        el.shadowRoot.querySelector('lion-button').click();
        expect(checkfun).to.have.callCount(1);
      });
});

   