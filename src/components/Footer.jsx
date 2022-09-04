import Twitter from '../assets/Twitter Icon.png'
import Facebook from '../assets/Facebook Icon.png'
import Instagram from '../assets/Instagram Icon.png'
import Github from '../assets/GitHub Icon.png'

export default function Footer(){
    return (
        <div className='footer-container'>
            <footer className='footer'>
                <a href='https://twitter.com/XandreiE'>
                    <img src={Twitter} alt='twitter logo'/>
                </a> 
                <a href='https://www.facebook.com/xandrei.esponilla'>
                    <img src={Facebook} alt='facebook logo'/>
                </a>
                <a href='https://www.instagram.com/xandrei_at_home/'>
                    <img src={Instagram} alt='instagram logo'/>
                </a>
                <a href='https://github.com/xandreiAThome'>
                    <img src={Github} alt='github logo'/>
                </a>

            </footer>
        </div>
    )
}