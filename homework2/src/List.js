function List({value}) {
  const listNumber = value.map((num, index) => {
    return (
      <li
        key={num.toString() + 'index' + index}>{num}</li>)
  });
  return <ol>{listNumber}</ol>
}

export default List