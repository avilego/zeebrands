const InputText = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
        ref={props.ref}
      />
    </div>
  );
};

export default InputText;
