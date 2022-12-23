import './styles/BackCard.css'
import illustration from '../../public/images/illustration-thank-you.svg'

export const BackCard = ({ selection }) => {
  return (
    <main className='back-container animate__animated animate__fadeIn'>
      <div className='illustration-container'>
        <img
          className='illustration'
          src={illustration}
          alt='Submit Illustration'
        />
      </div>

      <p className='rating-summary'>You selected {selection} out of 5</p>

      <h1>Thank you!</h1>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  )
}
