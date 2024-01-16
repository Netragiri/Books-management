
import { Button, Col, Row } from "react-bootstrap"
import "../../assets/css/layout/layout.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import ConfirmModal from "../../Shared/ConfirmModal";
import logoutIcon from "../../assets/icons/logout.svg"
import { successToast } from "../../Shared/helper";

function Header() {
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const navigate = useNavigate()

    const logoutHanlder = () => {
        setShow(false)
        localStorage.setItem("isLoggdIn", "false")
        setTimeout(() => {
            navigate("/")
            successToast("Logout Successfully")
        }, 500)
    }
    return (
        <>
            <header className='header-section p-3'>
                <Row>
                    <Col sm={6}>
                        <Link to="/dashboard" className="text-decoration-none">
                            <h3>Book Management system</h3>
                        </Link>
                    </Col>
                    <Col sm={4}></Col>
                    <Col sm={2} className="text-end">
                        <Button className="logout-btn fw-bold" onClick={() => setShow(true)}>
                            <span className="me-2">Log out</span>
                            <img src={logoutIcon} alt="logout-btn" />
                        </Button>{' '}
                    </Col>
                </Row>
                <ConfirmModal
                    title="Are you sure want to logout?"
                    btnTitle="Logout"
                    show={show}
                    handleClose={handleClose}
                    btnHandler={logoutHanlder}
                />
            </header>

        </>
    )
}

export default Header
