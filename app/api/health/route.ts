import { NextResponse } from 'next/server';
export async function GET(){ return NextResponse.json({data:{status:'ok',mode:'demo',timestamp:new Date().toISOString()},error:null}); }
