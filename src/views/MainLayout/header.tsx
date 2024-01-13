
import { Button } from "react-bootstrap"
import "../../assets/css/layout/layout.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header className='header-section'>
                <div className="d-flex justify-content-between">
                    <Link to="/dashboard" className="text-decoration-none">
                    <h3>Book Management system</h3>
                    </Link>
                    <Button variant="secondary" className="m-3" size="sm">Log out</Button>{' '}
                </div>
            </header>
        </>
    )
}

export default Header
