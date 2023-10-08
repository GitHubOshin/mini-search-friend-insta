import { useState, useRef, useEffect } from 'react'

import './app.css'

const users = [
  { name: 'Afolasayo', account: 'pre_tty_swan' },
  { name: 'Carolina', account: 'carorebucci' }
]

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [searchName, setSearchName] = useState<string>('')
  const [matchName, setMatchName] = useState<
    { name: string; account: string } | undefined
  >()

  useEffect(() => {
    // use type guard to make sure that the current
    // - is definitely going to be referring to input element.
    if (!inputRef.current) {
      return
    }
    inputRef.current?.focus
  }, [])

  const handleOnClick = () => {
    const foundFriend = users.find((user) => {
      return user.name.toLowerCase() === searchName.toLowerCase()
    })
    setMatchName(foundFriend)
    setSearchName('')
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(event.target.value)
  }

  return (
    <div className="container">
      <b>Search friend's Instagram account</b>
      <input
        className="input-search"
        ref={inputRef}
        placeholder="search name"
        value={searchName}
        onChange={handleOnChange}
      />
      <button className="btn-find" onClick={handleOnClick}>
        Find
      </button>
      {matchName && matchName.name && matchName && matchName.account ? (
        <div>
          name: {matchName.name} <br />
          account: {matchName.account}
        </div>
      ) : null}

      <p>Test: Afolasayo or Carolina</p>
    </div>
  )
}

export default App
