export default function SortSelection({ options, value, onChange }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
  )
}
