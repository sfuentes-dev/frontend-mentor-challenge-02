import './styles/FrontCard.css'
import IconStar from '../../public/images/icon-star.svg'

const values = [1, 2, 3, 4, 5]

export const FrontCard = ({ selection, setIsSubmit, setSelection }) => {
  const handleClick = (value) => {
    setSelection(value)
  }

  return (
    <main>
      <div className='star-container'>
        <img src={IconStar} alt='Icon Star' />
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className='btn-container'>
        {values.map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className={`rating-btn ${
              selection === value ? 'active' : 'no-active'
            }`}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        className='btn-submit'
        type='submit'
        onClick={() => setIsSubmit(true)}
        disabled={selection === ''}
      >
        Submit
      </button>
    </main>
  )
}
