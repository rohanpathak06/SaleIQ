import { NextResponse } from 'next/server';
export async function POST(){ const res=NextResponse.json({data:{user:{email:'demo@saleiq.app',role:'owner'}},error:null}); res.cookies.set('saleiq_demo','owner',{httpOnly:true,sameSite:'lax',maxAge:86400,path:'/'}); return res; }
