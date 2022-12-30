import { expect } from "@open-wc/testing";
export const scopedElementSelectOne =(container,tagname)=>
container?.shadowRoot?.querySelector(tagname);

export const shadowRootSelectOne=(container,selector)=>container ?.shadowRoot?.querySelectorAll(selector);
export const selectOne=(container,selector)=>container?.querySelectorAll(selector);
// export function checkDefaultRequiredErrorMessage(el){
//     const feedback= selectOne(el,'*[data-tag-name="lion-validation-feedback"]');
//     const d=shadowRootSelectOne(feedback,'span');
//     expect(d.innerText.trim()).to.equal('Type is a required field');
// }

// export function checkDefaultRequiredErrorMsg(el){
//     const res= selectOne(el,'*[data-tag-name="lion-input"]');
//     const result=shadowRootSelectOne(res,'span');
//     expect(result.innerText.trim()).to.equal('First name is a required field');
// }

// export function checkDefaultRequiredErrorMe(el){
//     const last= selectOne(el,'*[data-tag-name="lion-input"]');
//     const name=shadowRootSelectOne(last,'span');
//     expect(name.innerText.trim()).to.equal('Last name is a required field');
// }
// export function checkDefaultRequiredErrorMes(el){
//     const mail= selectOne(el,'*[data-tag-name="lion-input"]');
//     const email=shadowRootSelectOne(mail,'span');
//     expect(email.innerText.trim()).to.equal('E-mail is a required field');
// }

// export function checkDefaultRequiredError(el){
//     const amount= selectOne(el,'*[data-tag-name="lion-input"]');
//     const amount1=shadowRootSelectOne(amount,'span');
//     expect(amount1.innerText.trim()).to.equal('Should enter an amount greater than ten thousand ');
//     expect(amount1.innerText.trim()).to.equal('Should enter an amount less than ten crore ');
//     expect(amount1.innerText.trim()).to.equal('Amount is a required field');
    
// }
// export function clickoper(el){
//     const clickop= selectOne(el,'*[data-tag-name="lion-button"]');
// }
