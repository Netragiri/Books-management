
import { Button } from "react-bootstrap"
import "../../assets/css/layout/layout.css"

function Header() {
    return (
        <>
            <header className='header-section'>
                <div className="d-flex justify-content-between">
                    <h3>Book Management system</h3>
                    <Button variant="secondary" className="m-3" size="sm">Log out</Button>{' '}
                </div>
            </header>
        </>
    )
}

export default Header
