import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import { scopedElementSelectOne } from './util.js';
const ele=await fixture(html` <loan-header></loan-header>`);
const x=scopedElementSelectOne(ele,'#container');
const button = ele.shadowRoot.querySelectorAll('button');

describe('loan-header', async() => {

  it('should check the element',()=>{
    expect(ele).to.be.not.undefined;
    });

    it('should be button element accessible',()=>{
      expect(x).to.be.not.undefined;
    });
    it('should be button element accessible',()=>{
      const y=scopedElementSelectOne(ele,'#btn');
      expect(y).to.be.not.undefined;
    });
 
    it('should color of the button should get change', async () => {
      button[1].click();
      expect(button[1]).to.have.class('bg-btn-color');
    });
    
    it('should check for the color change of button', async () => {
      button[0].click();
      expect(button[1]).to.have.class('btn-cursor');
    });
   
  });

