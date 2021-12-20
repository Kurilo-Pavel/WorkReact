function FormCheckbox({form, label, field, options}) {
  const {errors, setFieldValue} = form;

  function handleChange(event) {
    const index = field.value.includes(event.target.value);
    if (!index) {
      setFieldValue(field.name, [...field.value, event.target.value]);
    } else {
      setFieldValue(
        field.name,
        field.value.filter((i) => i !== event.target.value)
      );
    }
  }

  return (
    <div>
      {options ? (
        options.map((option) => (
          <div key={option.value}>
            <input
              {...field}
              type="checkbox"
              id={option.value}
              checked={field.value.includes(option.value)}
              onChange={handleChange}
              value={option.value}
            />
            <label htmlFor={option.value}>{option.value}</label>
          </div>
        ))
      ) : (
        <div>
          <input
            {...field}
            type="checkbox"
            id={field.name}
          />
          <label htmlFor={field.name}>{label}</label>
        </div>
      )}
      {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
  );
}

export default FormCheckbox