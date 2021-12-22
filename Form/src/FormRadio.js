function FormRadio({form, label, field, options}) {
  const {errors, setFieldValue} = form;

  function handleChange(event) {

    setFieldValue(field.name, event.target.value);

  }

  return (
    <div>
      {options ? (
        options.map((option) => (
          <div key={option.value}>
            <input
              {...field}
              type="radio"
              id={option.label}
              value={option.label}
              checked={field.label}
              onChange={handleChange}
              name={option.name}
            />
            <label htmlFor={option.label}>{option.label}</label>
          </div>
        ))
      ) : (
        <div>
          <input
            {...field}
            type="radio"
            id={field.label}
          />
          <label htmlFor={field.name}>{label}</label>
        </div>
      )}
      {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
  );
}

export default FormRadio