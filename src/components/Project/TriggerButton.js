import React from 'react';
import {ModalTrigger} from '../../style/Modal'
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <ModalTrigger
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </ModalTrigger>
  );
};
export default Trigger;
