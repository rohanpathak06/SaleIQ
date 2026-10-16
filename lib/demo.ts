export const months: {month:string;revenue:number;orders:number;i:number}[] = [
  ['May',8.8],['Jun',8.1],['Jul',9.4],['Aug',10.1],['Sep',9.8],['Oct',12.4],['Nov',18.7],['Dec',16.2],['Jan',11.5],['Feb',10.7],['Mar',12.8],['Apr',13.6]
].map(([month,revenue],i)=>({month:String(month),revenue:Number(revenue),orders:Math.round(Number(revenue)*1160),i}));
export const channels=[{name:'Shopify',value:48,color:'#ff5a36'},{name:'Amazon',value:32,color:'#d58b6e'},{name:'WooCommerce',value:20,color:'#77796f'}];
export const products=[
  ['Mira Cane Tray','Home accents','₹ 12,84,200','+18.4%'],['Sora Linen Throw','Textiles','₹ 10,76,840','+12.1%'],['Nila Storage Basket','Organisation','₹ 9,24,100','+8.6%'],['Aru Table Lamp','Lighting','₹ 7,82,310','−3.2%'],['Kora Ceramic Set','Dining','₹ 6,48,500','+6.7%']
];
export const alerts=[['Stock-out soon','Mira Cane Tray has 6 days of cover','High'],['Returns elevated','Sora Linen Throw return rate is 4.1σ above baseline','Medium'],['Demand signal','Amazon orders are 28% ahead of expected','Low']];
export const questions=['What drove revenue last week?','Which products are at risk of stock-out?','Compare Amazon to Shopify this quarter','Show the return rate by category'];
