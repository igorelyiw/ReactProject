import React from 'react';
import { useFormik } from 'formik';

import styled from 'styled-components';
import { BigButton } from '../../components';

const InputCustom = styled.input`
width:315px;
line-height:15px;
padding:8px;
border-radius:5px;
margin:24px 0;
`;
const InputSmall = styled.input`
width:148px;
line-height:15px;
padding:8px;
border-radius:5px;
margin-top:24px;
`;
const Wrapper = styled.form`
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      date: '',
      name: '',
      secondName: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <div>
        <InputCustom
          type="date"
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
      </div>
      <div>
        <InputSmall
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={"Введіть ваше ім'я"}
        />
        <InputSmall
          id="secondName"
          name="secondName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.secondName}
          placeholder={"Введіть ваше прізвище"}
        />
      </div>
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
        <InputSmall
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={'Введіть ваш пароль'}
        />
        <InputSmall
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          placeholder={'Підтвердіть ваш пароль'}
        />
      </div>
      <BigButton type="submit">Зареєструватися</BigButton>
    </Wrapper>
  );
};