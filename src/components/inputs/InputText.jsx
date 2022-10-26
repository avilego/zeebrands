const InputText = (props) => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
        ref={props.ref}
      />
    </div>
  );
};

export default InputText;
