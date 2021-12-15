import React, {Component} from "react";
import {Formik, Form, Field} from 'formik';
import './Form.css'

export default class FormFormik extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          userName: '',
          city: '',
          email: '',
          tel: '',
          adults: '',
          children: '',
          dateIn: '',
          dateOut: '',
          smoke: false,
        }}
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name='userName'/>
          </div>

          <div>
            <label>Email</label>
            <Field name='email'/>
          </div>

          <div>
            <label>Tel</label>
            <Field name='tel' type='tel'/>
          </div>

          <div>
            <label>Where are you going?</label>
            <Field name='city'/>
          </div>

          <fieldset>

            <legend>Date</legend>

            <span>
              <label>Check-in</label>
              <Field type='date' name='dateIn'/>
            </span>

            <span>
              <label>Check-out</label>
              <Field type='date' name='dateOut'/>
            </span>

          </fieldset>

          <div>
            <label>Adults</label>
            <Field name="adults" type='number'/>
          </div>

          <div>
            <label>Children</label>
            <Field name='children' type='number'/>
          </div>

          <div>
            <Field name='smoke' type='checkbox' id='smoke'/>
            <label for='smoke'>Smoke</label>
          </div>

          <button tupe='submit'>Submit</button>
        </Form>
      </Formik>
    );
  }
}

