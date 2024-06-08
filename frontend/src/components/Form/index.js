import {
    useQuery
} from '@tanstack/react-query';
import { fetchFormSchema } from "./api";
import FormItem from "../FormItem";
import { SkeletonLoader } from "oolib"
import './index.css';

function Form() {
    const { data: formSchema, isLoading } = useQuery({ queryKey: ['formSchema'], queryFn: fetchFormSchema });
    return (
        <div className="Form">
            <h2>Form</h2>
            {isLoading ? <Loader /> : <>
                {formSchema?.data?.map((formItem, idx) => {
                    return <div key={idx} className="FormItem">
                        <FormItem key={idx} item={formItem} />
                    </div>
                })}
            </>}
        </div>
    );
}

export default Form;



function Loader() {
    return <>
        <SkeletonLoader style={{
            height: 30,
            width: "70%"
        }} />
        <div style={{ margin: "20px" }}></div>
        <SkeletonLoader style={{
            height: 50,
            width: "100%"
        }} />
        <div style={{ margin: "20px" }}></div>
        <SkeletonLoader style={{
            height: 20,
            width: "90%"
        }} /><div style={{ margin: "20px" }}></div>
        <SkeletonLoader style={{
            height: 80,
            width: "100%"
        }} />
    </>
}