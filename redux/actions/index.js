import {store} from '../../App'

export function UpdateId(MusteriID)
{
    var herhangibirobje={
            type : 'UpdateId',
            payload: {
                musteriId: MusteriID
            }     
    };
    store.dispatch(herhangibirobje);

}
export function UpdateTC(Tckn)
{
    var hangibirobje={
            type : 'UpdateTC',
            payload: {
                tckn: Tckn
            }     
    };
    store.dispatch(hangibirobje);

}
export function UpdatehesapId(hesapId)
{
    var birobje={
        type:'UpdatehesapId',
        payload:{
            hesapId:hesapId
        }
    }
    store.dispatch(birobje);
}