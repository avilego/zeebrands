const InputText = (props) => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder={props.placeholder}
        aria-describedby="basic-addon1"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputText;
