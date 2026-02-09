import React from "react";

const Dashboard = ({ tools = [] }) => {
  const totalTools = tools.length;
  const completedTools = tools.filter((tool) => tool.progress === 100).length;

  const totalProgress = tools.reduce((sum, tool) => sum + Number(tool.progress), 0);
  const avgProgress = totalTools === 0 ? 0 : Math.round(totalProgress / totalTools);

  return (
    <div className="dashboard">
      <div className="dash-card">
        <h3>Total Skills</h3>
        <p>{totalTools}</p>
      </div>

      <div className="dash-card">
        <h3>Completed</h3>
        <p>{completedTools}</p>
      </div>

      <div className="dash-card">
        <h3>Avg. Proficiency</h3>
        <p>{avgProgress > 100 ? 100 : avgProgress}%</p>
      </div>
    </div>
  );
};

export default Dashboard;
