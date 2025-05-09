function Input2({ 
    id,
    textoLabel,
    classe="mb-3",
    classNameLabel="form-label",
    classNameInput="form-control",
    tipo="text",
    placeholder,
    valor="",
    onChange=()=>{},


 }) {
  return (
    <>
    <div class={classe}>
        <label htmlFor={id} className={classNameLabel}>{textoLabel}</label>
        <input 
        id={id} placeholder={placeholder}
        value={valor}
        type={tipo} 
        className={classNameInput} 
        onChange={onChange}
        ></input>
    </div>
    </>
  );
}

export default Input2;