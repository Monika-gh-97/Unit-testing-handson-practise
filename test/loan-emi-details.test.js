import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
const assert="referee.assert";
import  {scopedElementSelectOne} from './util.js';
import Sinon,{stub} from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';


describe('emi details', async() => {
  const el = await fixture(`<loanemi-details></loanemi-details>`); 
  const button= el.shadowRoot.querySelectorAll('button');
   await elementUpdated(el);
    it('should check the element',()=>{
      expect(el).to.not.be.undefined;
      });

      
      it('check for the h2 heading', async () => {
        const h2 = scopedElementSelectOne(el,'h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.equal('EMI Details');
    });
});