import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Error from "../Error";
import { ICreateCategory } from '../../entities/category';
import {createNewCategory} from '../../store/thunks/category'

interface ICreateNewCategoryProps {

}

const CreateNewCategory: React.FC<ICreateNewCategoryProps> = ({}) => {
    const dispatch: any = useDispatch();
    const [serverError, setServerError] = useState("");
    
    const initialValues: ICreateCategory = {
        title: ""
    };
    const validationSchema = Yup.object({
        title: Yup.string().min(3).max(50).required("Required")
    });

    const onSubmit = (values: ICreateCategory) => {
        setServerError("")
        dispatch(createNewCategory(values)).catch((error: any) => {
        if(error.response) {
            setServerError(error.response.data.message);
      }})
    }

    return (
        <React.Fragment>
            <h2>Создать новую категорию</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(formik) => {
                    return (
                    <div className='container'>
                        <Form className='form'>
                            <Field id='title' name='title' type='text' placeholder='Название категории...' />
                            <ErrorMessage name='title' component={Error} />
                        <button type='submit' disabled={!formik.dirty || !formik.isValid}>
                            Создать
                        </button>
                        {serverError && <Error>{serverError}</Error>}
                        </Form>
                    </div>
                    );
                }}
            </Formik>            
        </React.Fragment>
    )
}

export default CreateNewCategory;