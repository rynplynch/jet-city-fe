import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
import FocusTrap from 'focus-trap-react';
import {ModalCover, ModalArea, ModalClose, ModalCloseIcon, ModalBody, HideVisual} from '../../style/Modal'

export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,
  onChange
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <ModalCover
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <ModalArea ref={modalRef}>
          <ModalClose
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            onClick={closeModal}
          >
            <HideVisual id="close-modal">
              Close
            </HideVisual>
            <ModalCloseIcon viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </ModalCloseIcon>
          </ModalClose>
          <ModalBody>
            <Form onSubmit={onSubmit} onChange={onChange} />
          </ModalBody>
        </ModalArea>
      </ModalCover>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
