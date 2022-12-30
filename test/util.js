import { expect } from "@open-wc/testing";
export const scopedElementSelectOne =(container,tagname)=>
container?.shadowRoot?.querySelector(tagname);

export const shadowRootSelectOne=(container,selector)=>container ?.shadowRoot?.querySelectorAll(selector);
export const selectOne=(container,selector)=>container?.querySelectorAll(selector);
