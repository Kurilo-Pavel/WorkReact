import React, {Component} from "react";
import {Formik, Form, Field} from 'formik';
import './Form.css';
import * as Yup from 'yup';
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";

const telRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export default class FormFormik extends Component {

  render() {
    return (
      <Formik
        initialValues={{
          userName: '',
          email: '',
          tel: '',
          gender: 'female',
          city: '',
          dateIn: '',
          dateOut: '',
          adults: '2',
          children: '0',
          smoke: false,
        }}

        onSubmit={(formValues) => alert(JSON.stringify(formValues))}

        validationSchema={Yup.object().shape({
          userName: Yup.string()
            .required('Name is required')
            .max(20, 'Name should be less than 20 characters'),
          email: Yup.string()
            .email('Email should be in correct format')
            .required('Email is required'),
          city: Yup.string()
            .required('City is required'),
          tel: Yup.string()
            .matches(telRegex, 'Telephone number should be contain numbers')
            .required('Telephone number is required'),
          adults: Yup.number()
            .required('Adults is required')
            .min(1, 'Enter a positive number'),
          children: Yup.number()
            .required('Adults is required')
            .min(0, 'Enter a positive number'),
          dateIn: Yup.date()
            .min(new Date(), 'Date cannot be in the past')
            .required('DateIn is required'),
          dateOut: Yup.date()
            .min(Yup.ref('dateIn'), "end date can't be before start date")
            .required('DateOut is required'),
        })}
      >

        <Form>
          <Field name="userName" component={FormInput} label="Name"/>
          <Field name="email" component={FormInput} label="Email"/>
          <Field name="tel" component={FormInput} label="Tel"/>

          <fieldset>
            <legend>Gender</legend>
            <Field component={FormRadio} name="gender" label="Female" id="female"/>
            <Field component={FormRadio} name="gender" label="Male" id="male"/>
          </fieldset>

          <Field name="city" component={FormInput} label={"Where are you going?"}/>

          <fieldset>
            <legend>Date</legend>
            <Field name="dateIn" label="Check-in" component={FormInput} type="date"/>
            <Field name="dateOut" label="Check-out" component={FormInput} type="date"/>
          </fieldset>

          <Field name="adults" component={FormInput} label="Adults" type="number"/>
          <Field name="children" component={FormInput} label="Children" type="number"/>

          <Field name="smoke" component={FormCheckbox} label="Smoke"/>

          <button tupe="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

