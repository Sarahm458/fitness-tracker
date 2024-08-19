import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Retrieve goals from local storage
    const storedGoals = JSON.parse(localStorage.getItem('fitnessGoals')) || [];
    setGoals(storedGoals);
  }, []);

  const saveGoal = (goal) => {
    const updatedGoals = [...goals, goal];
    setGoals(updatedGoals);
    localStorage.setItem('fitnessGoals', JSON.stringify(updatedGoals));
  };

  const initialValues = {
    goal: '',
  };

  const validationSchema = Yup.object({
    goal: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    saveGoal(values.goal);
    resetForm();
  };

  const CustomErrorMessage = (props) => (
    <div className="px-4 text-red" {...props} />
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Set Your Fitness Goals</h1>
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="flex flex-col items-center my-8">
          <div className="mb-4">
            <label className="text-lg px-4" htmlFor="goal">Fitness Goal</label>
            <Field className="border p-2 rounded" type="text" id="goal" name="goal" />
            <br/>
            <ErrorMessage name="goal" component={CustomErrorMessage} />
          </div>
          <br/>
          <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add Goal</button>
        </Form>
      </Formik>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Your Goals</h2>
        {goals.length > 0 ? (
          <ul className="list-disc pl-5">
            {goals.map((goal, index) => (
              <li key={index} className="mb-2">
                {goal}
              </li>
            ))}
          </ul>
        ) : (
          <p>No fitness goals set.</p>
        )}
      </section>
    </div>
  );
};

export default GoalsPage;

