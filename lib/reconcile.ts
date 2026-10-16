export const reconcile=(revenue:number,costs:number,profit:number)=>({pass:Math.abs(revenue-costs-profit)<0.01,expected:revenue-costs});
