import { Button, Modal } from 'react-bootstrap'

interface ConfirmModalProps {
    show: boolean;
    handleClose: () => void;
    btnHandler: (id?: string | number) => void;
    id?: string | number;
    title: string;
    btnTitle?: string
}

const ConfirmModal = ({ title, show, handleClose, btnHandler, id, btnTitle }: ConfirmModalProps) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <h5>{title}</h5>
                <div className='mt-4'>
                    <Button variant='secondary' size='sm' onClick={handleClose}>Cancel</Button>
                    <Button variant='outline-danger mx-3 fw-bold' size='sm' onClick={() => btnHandler(id)}>{btnTitle || "Yes"}</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ConfirmModal
