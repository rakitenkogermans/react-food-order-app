import React from 'react';
import cl from './Modal.module.css';
import * as ReactDOM from "react-dom";

function Backdrop(props) {
    return (<div onClick={props.onClose} className={cl.backdrop}/>);
}

function ModalOverlay(props) {
    return (
        <div className={cl.modal}>
            <div className={cl.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.querySelector('#overlays');

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;
