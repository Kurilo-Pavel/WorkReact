function FormCheckbox({form, label,field, type = 'checkbox'}) {
  const {errors, touched} = form;
  return(
    <div>
      <label>{label}</label>
      <input type={type}{...field}/>
      {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
  )
}
export default FormCheckbox