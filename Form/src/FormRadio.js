function FormRadio({form, label,field, type = 'radio'}) {
  const {errors, touched} = form;
  return(
    <span>
      <label>{label}</label>
      <input type={type}{...field}/>
      {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </span>
  )
}
export default FormRadio