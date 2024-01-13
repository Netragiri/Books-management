
import { Button, Col, Row } from "react-bootstrap"
import "../../assets/css/layout/layout.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header className='header-section p-3'>
                <Row>
                    <Col> <Link to="/dashboard" className="text-decoration-none">
                    <h3>Book Management system</h3>
                    </Link></Col>
                   <Col className="text-end">
                   <Button variant="secondary" className="" size="sm">Log out</Button>{' '}
                   </Col>
                    
                </Row>
            </header>
        </>
    )
}

export default Header
