import warning from '../assets/error-404.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className='not-found'>
        <h1>404 Error: Page Not Found</h1>
        <img src={warning}></img>
        <Link to='/'>
          Go Back
        </Link>
      </div>
    </>
  )
}
