const Route = ({path, children}) => {
  if (document.location.pathname === path) {
    return children;
  } else return null;
};

export default Route;
