function InputFloating({
    id,
    textoLabel,
    classe="form-floating mb-3",
    classNameInput="form-control",
    tipo="text",
    placeholder,

    }) {
  return (
    <>
    <div class={classe}>
        <input type={tipo} class={classNameInput} id={id} placeholder={placeholder}></input> 
        <label for={id}>{textoLabel}</label>
    </div>
    </>
  );
}

export default InputFloating;