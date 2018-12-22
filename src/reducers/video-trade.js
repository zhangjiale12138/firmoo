import { VIDEO_TRADE } from '../actions/video-trade';

const initialState = {

    number: [1, 2]
}

export default function (state = initialState, action) {

    switch (action.type) {
        case VIDEO_TRADE: {
            return {
                ...state,
                number: getRandom()
            }
        }
        default:
            return state;
    }
}
function getRandom() {
    
    var arr = [0, 1, 2, 3];
    var demo = [];
    for(let i=0;i<=1;i++){
        let index = Math.floor(Math.random() * arr.length);
        demo.push(arr[index]);
        if(i<1)arr.splice(index, 1);
    }
    return demo;

}


