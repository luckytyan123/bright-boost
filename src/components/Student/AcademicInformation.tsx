import React from "react";
import Profile from "../../assets/profile.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
const AcademicInformation = () => {
    return (
        <div className="academic-information-container white-box">
            <div className="title">
                <p>Academic Information (Student)</p>
            </div>
            <div className="content">
                <div className="flex-container">
                    <div className="profile-picture">
                        <img src={Profile} className="circle" />
                    </div>
                    <div className="information">
                        <ul className="list-unstyled">
                            <li className="name">John Doe</li>
                            <li className="course">Course - Year</li>
                            <li className="department">Lorem ipsum dolor sit amet  </li>
                        </ul>
                    </div>

                </div>
                <div className="additional-information">
                    <ul className="list-unstyled">
                        <li className="phone"><span><img src={Phone} /></span>(415) 444-2222</li>
                        <li className="email"><span><img src={Email} /></span>johndoe@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AcademicInformation