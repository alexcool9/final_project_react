
const ChildComp = ({ onVictorClick }) => {
    return <button onClick={() => onVictorClick("Victor")}>Victor</button>;
};

const RaisingEvents = () => {
    const handleClick = text => { };

    return <ChildComp onVictorClick={handleClick}></ChildComp>;
};

export default RaisingEvents;