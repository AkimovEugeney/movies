import React from 'react';
import './Modal.css'

const Modal = (props) => {
    return (
        <div>
        <div className={props.active ? "modal active" : "modal"} onClick={()=>props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                fdfdfdf
            </div>
        </div>
        </div>
    );
}

export default Modal;
