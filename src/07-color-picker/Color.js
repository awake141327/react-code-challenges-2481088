export default function Color ({ hex, name, setBackgroundColor }) {
  return (
    <button
      onClick={() => setBackgroundColor(hex) }
      className='color-square'
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
