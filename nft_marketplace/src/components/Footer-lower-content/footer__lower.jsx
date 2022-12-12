import './footer__lower.css'
const FooterLower = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='container footer__lower'>
            <p>© {year} Fenti. All rights reserved.</p>
            <div className='footer__lower__links'>
                <a href="#dee">Terms</a>
                <a href="#wed">Privacy Policy</a>
            </div>
        </div>
    )
}

export default FooterLower;