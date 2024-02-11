

export default function About(){
    return (
    <div className="about-section">
        <div className="img-container">
            {/* <img src={valeriaImg} alt="author-photo"/>  */}
        </div>
        <p className="name">Valeria Kravtsova</p>
        <p className="job">Frontent Developer, Designer</p>
        <p className="webSite">portfolio.website </p>
       
        <div className="info-container"></div>
        <div class="link-container">
            <div className="link-cont email-cont">
                <a className="email" href='mailto:lera.gor@inbox.ru'>email</a></div>

            <div className="link-cont">

                <a className="linkedIn"href='https://ru.linkedin.com/in/valeria-kravtsova-a1a1421b9?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F'>LinkedIn</a>
            </div>
        </div>
    </div>)
}