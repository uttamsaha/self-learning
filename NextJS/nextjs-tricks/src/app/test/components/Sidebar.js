import Step from './Steps'
const Sidebar = ({completedSteps, currentStep}) => {
    return (
      <div className="sidebar">
        <Step completed={completedSteps.includes(1)} current={currentStep === 1} />
        <Step completed={completedSteps.includes(2)} current={currentStep === 2} />
        <Step completed={completedSteps.includes(3)} current={currentStep === 3} />
      </div>
    );
  };

  export default Sidebar;