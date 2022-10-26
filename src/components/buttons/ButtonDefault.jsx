const ButtonDefault = (props) => {
  return (
    <button type={props.type} class="btn btn-primary">
      {props.text}
    </button>
  );
};

export default ButtonDefault;
