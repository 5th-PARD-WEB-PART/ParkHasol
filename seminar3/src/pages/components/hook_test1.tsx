import{useState} from "react";
import {useEffect} from "react";

export default function HookExample1(){
    const [current, setCurrent] = useState<number>(0);
    const [bgColor, setBgColor] = useState<string>("bg-blue-400");

    const update = () =>{
        setCurrent((prev)=>prev+2);
    };

    const setRestNumber = () => {
        setCurrent(0);
    };

    useEffect(()=> {
        if(current>=30){
            setBgColor("bg-red-400");
        } else if(current>=20){
            setBgColor("bg-green-400");
        } else if(current>=10){
            setBgColor("bg-yellow-400");
        }else{
            setBgColor("bg-blue-400");
        }

        if(current !==0 && current % 10 === 0){
            console.log(`🎉${current}을(를) 넘었습니다!`
            );
        }
    },[current]); //[current]을 쓰는 이유 : current의 값이 바뀔 때마다 렌더링이 다시 되기 때문에 조건문이 효력이 생기는 것

    return(
        <div>
            <div className={`${bgColor} tet-6xl font-extrabold`}>
                현재 파드 기수는?{current}
            </div>
            <button
                className="border-2 dark:border-white border-black pr-2 pl-2 mt-2"
                onClick={update}
            >
            업데이트
            </button>
        </div>
    );
}