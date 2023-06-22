
export default function (param,min,max){
    return !param || param.length < min || param.length > max;
}

