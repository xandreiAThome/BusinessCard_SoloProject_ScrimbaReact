import my_photo from '../assets/my-photo.jpg'
import Email from '../assets/Email.png'
import Linkedln from '../assets/Linkedln.png'

export default function Info () {
    return (
        <div className="info-container">
            <img src={my_photo} alt='photo of me' />

            <h1 className="info-h1"> Ellexandrei A. Esponilla</h1>
            <h3 className="info-h3">Highschool Student</h3>
            <h4 className="info-h4">esponilla.website</h4>

            <a className='Email' href='mailto: xandrei37@gmail.com'>
                <img src={Email} alt='email logo'/>
            </a>
            <a className='Linkedln' href='https://www.linkedin.com/in/ellexandrei-esponilla-490ab5247'>
                <img src={Linkedln} alt='linkedln logo' />
            </a>
        </div>
    )
}