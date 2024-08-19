import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../App.css"

const WorkoutForm = () => {
  const initialValues = {
    exerciseType: '',
    duration: '',
    caloriesBurned: '',
  };

  const validationSchema = Yup.object({
    exerciseType: Yup.string().required('Required'),
    duration: Yup.number().required('Required').positive('Must be positive'),
    caloriesBurned: Yup.number().required('Required').positive('Must be positive'),
  });

  const saveWorkout = (workout) => {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  };

  const onSubmit = (values, { resetForm }) => {
    saveWorkout(values);
    resetForm();
    console.log('Workout saved:', values);
  };

  const CustomErrorMessage = (props) => (
    <div className="px-4 text-red-500" {...props} />
  );

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      <Form className="flex flex-col items-center my-8 ">
        <div className="mb-4">
          <label className="text-lg  px-4" htmlFor="exerciseType">Exercise Type</label>
          <Field className="border p-2 rounded" type="text" id="exerciseType" name="exerciseType" />
          <br/>
          <ErrorMessage name="exerciseType" component={CustomErrorMessage} />
        </div>
        <div className="mb-4">
          <label className="text-lg  px-4" htmlFor="duration">Duration (minutes)</label>
          <Field className="border p-2 rounded" type="number" id="duration" name="duration" />
          <br/>
          <ErrorMessage  name="duration" component={CustomErrorMessage}/>
        </div>
        <div className="mb-4">
          <label className="text-lg  px-4" htmlFor="caloriesBurned">Calories Burned</label>
          <Field className="border p-2 rounded" type="number" id="caloriesBurned" name="caloriesBurned" />
          <br/>
          <ErrorMessage name="caloriesBurned" component={CustomErrorMessage}/>
        </div>
        <br/>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Log Workout</button>
      </Form>
    </Formik>
  );
};

export default WorkoutForm;
