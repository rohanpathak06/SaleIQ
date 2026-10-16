import {AppScreen} from '@/components/AppScreen';
const supported=['live','orders','products','customers','goals','alerts','ads','profit','data-health','developers','team','activity','status','changelog'];
export default function Page({params}:{params:{operation:string}}){return <AppScreen view={(supported.includes(params.operation)?params.operation:'dashboard') as any}/>}
