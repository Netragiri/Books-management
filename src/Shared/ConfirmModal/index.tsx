import { Button, Modal } from 'react-bootstrap'

interface ConfirmModalProps {
    show: boolean;
    handleClose: () => void;
    handleDelete: (id?: string | number) => void;
    id?: string | number;
    title: string;
    btnTitle?: string
}

const ConfirmModal = ({ title, show, handleClose, handleDelete, id, btnTitle }: ConfirmModalProps) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <h6>{title}</h6>
                <div className='mt-3'>
                    <Button variant='secondary'>Cancel</Button>
                    <Button variant='outline-danger mx-3 fw-bold' onClick={() => handleDelete(id)}>{btnTitle || "Yes"}</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ConfirmModal
