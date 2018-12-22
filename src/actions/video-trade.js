export  const  VIDEO_TRADE = 'VIDEO_TRADE';

export function tradeVideo(number){
     
    return {

       type:VIDEO_TRADE,
       payload:number

    }

}