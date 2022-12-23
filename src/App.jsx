import { useState } from 'react'
import { BackCard } from './components/BackCard'
import { FrontCard } from './components/FrontCard'

export const App = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [selection, setSelection] = useState('')

  return (
    <>
      {isSubmit ? (
        <BackCard selection={selection} />
      ) : (
        <FrontCard
          selection={selection}
          setIsSubmit={setIsSubmit}
          setSelection={setSelection}
        />
      )}
    </>
  )
}
