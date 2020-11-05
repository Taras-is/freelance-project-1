import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from './SignIn.module.css'
import {Button, Input, Icon, Checkbox} from 'semantic-ui-react';
import * as Yup from "yup";
import { ISignIn } from "../../api/auth";
import "semantic-ui-css/semantic.min.css";
import FacebookImg from '../../assets/icons/Facebook.png'
import VkImg from '../../assets/icons/Vk.png'
import OdnoklasnikImg from '../../assets/icons/Odnoklasnik.png'

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email обязательный!")
            .email("Эти символы не соответствуют форме Email"),
        password: Yup.string()
            .required("Пароль обязательный!")
            .min(6, "Минимальная длина пароля - 6 символов!"),
    });

    const initialValues = {
        email: "",
        password: "",
    };

    const SignInLeft= ({ onSignIn, history }: any) => {
        useEffect(() => {}, []);

        const handleSubmit = async (values: ISignIn, formikActions: any) => {
            const response = await onSignIn(values);
            if (!response) history.push("/");
            if (response && response.err) formikActions.setErrors(response.err);
        };

        return (



            <div className={s.signInWrapper}>
                <div className={s.icons}>
                    <a href='#'><img alt='icon' src={VkImg} /></a>
                    <a href='#'><img alt='icon' src={FacebookImg} /></a>
                    <a href='#'><img alt='icon'  src={OdnoklasnikImg} /></a>
                </div>
               <div className={s.linecontainer}>

                  <hr color='#CECECE'/>
                   <div className={s.line_text}>или заполните форму</div>
               </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({
                          values,
                          handleSubmit,
                          handleChange,
                          isSubmitting,
                          isValid,
                          errors,
                          touched,
                      }) => (
                        <Form className={s.formContainer}>
                            <div className={s.field_wrapper}>
                      <label htmlFor='email'>Email или телефон</label>
                            <Field
                                name="email"
                                placeholder="Email"
                                component={CustomInput}
                                value={values.email}
                                onChange={handleChange}
                                className={s.input}
                            />

                            <ErrorMessage
                                component="div"
                                name="email"
                                className={s.errorMessage}
                            />
</div>
                        <div className={s.field_wrapper}>
                            <label htmlFor='password'>Пароль</label>
                            <Field
                                name="password"
                                placeholder="Password"
                                type="password"
                                component={CustomInput}
                                value={values.password}
                                onChange={handleChange}
                                className={s.input}
                            />
                            <ErrorMessage
                                component="div"
                                name="password"
                                className={s.errorMessage}
                            />
                        </div>
                            <Button type="submit" basic color='teal' className={s.btn}>
                            Ввойти
                        </Button>
                            <div className={s.forgotpassword_block}>
                            <a href='#' className={s.forgotpassword}>Забыли пароль?</a>
                            </div>
                            <div className={s.registercheck}>
                                <Checkbox label={<label>Я принимаю оферту гаранта и политику конфиденциальности,согласен с получением уведомлений и новостей на почту</label>} />
                            </div>
                        </Form>

                    )}
                </Formik>
            </div>
        );
    };

    export default SignInLeft;


    export const CustomInput = ({ field, form, ...props }: any) => {
        return <Input {...field} {...props} />;
    };
