import React from 'react';
import { useForm ,reset} from "react-hook-form";
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';

const AddServices = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        axios.post("https://polar-shelf-69370.herokuapp.com/services",data)
        .then(res => {
            if(res.data.insertedId){
                console.log("inserted");
                history.push('/');
            }
        })
        console.log(data);
    }
    return (
        <div className="mt-5 bg-info">
            <h1 className="text-center">Add Services</h1>
            {/*  "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form onSubmit={handleSubmit(onSubmit)} class="d-flex  flex-column justify-content-center gap-3 w-50 mx-auto" style={{height: "81.3vh"}}>
            {/* register your input into the hook by invoking the "register" function */}
                <input {...register("name")} placeholder="place name"/>
                
                {/* include validation with required or other standard HTML validation rules */}
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price", { required: true })} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;