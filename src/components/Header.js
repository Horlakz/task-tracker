import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showTheForm }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
        {location.pathname === '/' && (<Button
          color={showTheForm ? "red" : "green"}
          text={showTheForm ? "Close Form" : "Add Task"}
          onClick={onAdd}
        />)}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color : 'red',
//     backgroundColor: 'black'
// }

export default Header;
