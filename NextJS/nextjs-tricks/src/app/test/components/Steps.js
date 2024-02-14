const Step = ({ completed, current }) => {
  const stepClass = `step ${completed ? "completed" : ""} ${
    current ? "current" : ""
  }`;
  return <div className={stepClass}>Step</div>;
};

export default Step;