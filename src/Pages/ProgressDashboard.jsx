import React, { useEffect, useState } from 'react';

const ProgressDashboard = () => {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  useEffect(() => {
    const storedWorkoutLogs = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkoutLogs(storedWorkoutLogs);
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Progress Dashboard</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Workout Logs</h2>
        {workoutLogs.length > 0 ? (
          <ul className="list-disc pl-5">
            {workoutLogs.map((log, index) => (
              <li key={index} className="mb-2">
                <strong>Exercise:</strong> {log.exerciseType}, <strong>Duration:</strong> {log.duration} mins, <strong>Calories Burned:</strong> {log.caloriesBurned}
              </li>
            ))}
          </ul>
        ) : (
          <p>No workout logs available.</p>
        )}
      </section>
    </div>
  );
};

export default ProgressDashboard;

