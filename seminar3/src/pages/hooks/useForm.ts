import {useState,useCallback} from "react";

interface FormValues{
    name:string;
    email:string;
}

export function useForm(initialValues:FormValues){
    const [values,setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData]=useState<FormValues[]>([]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
        }));
    },[]);

    const handleSubmit = useCallback(
        (e:React.FormEvent)=> {
            e.preventDefault();
            console.log("폼 제출됨:", values);
            setSubmittedData((prevData)=>[...prevData, values]);
            setValues(initialValues);
        },
        [values,initialValues]
    );

    const logSubmittedData = ()=>{
        console.log("지금까지 제출된 모든 데이터 :", submittedData);
    };

    return {values, handleChange, handleSubmit,logSubmittedData};
}