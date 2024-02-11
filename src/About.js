

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
                <a className="email">email</a></div>

            <div className="link-cont">

                <a className="linkedIn">LinkedIn</a>
            </div>
        </div>
    </div>)
}