import React from "react";
import Header from "components/Header";
import { Container, Row, Col } from "react-bootstrap"
import AcademicInformation from "components/Student/AcademicInformation";
import AttendanceHistory from "components/Student/AttendanceHistory";
import UpcomingSessions from "components/Student/Sessions/UpcomingSessions";
import AskAQuestion from "components/Student/Subjects/AskAQuestion";
import RecentAskedQuestions from "components/Student/RecentAskedQuestions";
import ReserveStudySpace from "components/Student/ReserveStudySpace";
import FAQs from "components/Student/FAQs";
import Footer from "components/Footer";

const StudentDashboard = () => {
    return (
        <div className="student-dashboard-container">
            <Header />
            <Container fluid>
                <div className="main-container">
                    <Row>
                        <Col sm={4}><AcademicInformation /></Col>
                        <Col sm={4}><AttendanceHistory /></Col>
                        <Col sm={4}><UpcomingSessions /></Col>
                    </Row>
                    <Row>
                        <Col sm={7}><RecentAskedQuestions /></Col>
                        <Col sm={5}>
                            <AskAQuestion />
                            <ReserveStudySpace />
                        </Col>
                    </Row>
                    <FAQs />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default StudentDashboard;