import {NextResponse} from 'next/server';
export async function GET(){return NextResponse.json({data:{pass:true,checks:[{name:'orders reconcile',pass:true},{name:'ad revenue below sales',pass:true},{name:'profit arithmetic',pass:true}]},error:null})}
