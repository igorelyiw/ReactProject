import React from 'react';
import { useFormik } from 'formik';

import styled from 'styled-components';
import { BigButton } from '../../components';

const InputCustom = styled.input`
width:300px;
line-height:15px;
padding:8px;
border-radius:5px;
margin:24px 0;
`;
const SignForm = styled.form`
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <SignForm onSubmit={formik.handleSubmit}>
      <div>
        <InputCustom
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={'Введіть ваш email'}
        />
      </div>
      <div>
        <InputCustom
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={'Введіть ваш пароль'}
        />
      </div>
      <BigButton type="submit">Увійти</BigButton>
    </SignForm>
  );
};