const ButtonDefault = (props) => {
  return (
    <button type={props.type} className="btn btn-primary btn-lg btn-block">
      {props.text}
    </button>
  );
};

export default ButtonDefault;
