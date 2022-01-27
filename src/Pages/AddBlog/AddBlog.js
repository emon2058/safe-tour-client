import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddBlog = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const url="https://polar-shelf-69370.herokuapp.com/blogs"
        const url1 = "http://localhost:5000/blogs"
        axios.post(url1,data)
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
        <h1 className="text-center">Add Blog</h1>
        {/*  "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
        <form onSubmit={handleSubmit(onSubmit)} class="d-flex  flex-column justify-content-center gap-3 w-50 mx-auto" style={{height: "81.3vh"}}>
        {/* register your input into the hook by invoking the "register" function */}
            <input {...register("img")} placeholder="image url" />
            <input {...register("title")} placeholder="place name"/>
            <input {...register("name")} placeholder="your name"/>
            
            {/* include validation with required or other standard HTML validation rules */}
            <textarea {...register("description")} placeholder="description" />
            <input {...register("category")} placeholder="category"/>
            <input type="number" {...register("price", { required: true })} placeholder="total cost" />
            <input {...register("location")} placeholder="address"/>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
        </form>
    </div>
    );
};

export default AddBlog;