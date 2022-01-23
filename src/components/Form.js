export default function Form( { handleAdd, inputValue, handleChange } ) {

  return (
    < form onSubmit={handleAdd} >
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder='New Task'
      />
      <button type='submit'>Add</button>
    </form >
  )
}