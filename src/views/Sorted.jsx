import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import SortSelection from '../component/SortSelection/SortSelection'

const initialState = [
  { id: 1, value: 100 },
  { id: 1, value: 300 },
  { id: 1, value: 600 },
  { id: 1, value: 900 },
  { id: 1, value: 1200 },
]
const sortOptions = [
  { value: 'ascending', lable: 'По возростанию' },
  { value: 'descending', lable: 'По убыванию' },
]
export default function TableView(params) {
  const history = useHistory()
  const location = useLocation()
  const [expenses, setExpenses] = useState(initialState)

  const sortOrder =
    new URLSearchParams(location.search).get('sortBY') ?? 'ascending'

  const onSortOrderChange = (order) => {
    history.push({
      ...location,
      search: `sortBY=${order}`,
    })
  }
  useEffect(() => {
    if (location.search !== '') {
      return
    }
    history.push({ ...location, search: 'sortBY=ascending' })
  }, [history, location])

  useEffect(() => {
    setExpenses((prevExpenses) =>
      [...prevExpenses].sort((a, b) => {
        return sortOrder === 'ascending' ? a.value - b.value : b.value - a.value
      }),
    )
  }, [sortOrder])

  return (
    <>
      <SortSelection
        options={sortOptions}
        onChange={onSortOrderChange}
        value={sortOrder}
      />
    </>
  )
}
