import styled from "styled-components";

export const ModalCover = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transform: translateZ(0);
    background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2.5em 1.5em 1.5em 1.5em;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    @media only screen and (min-width: 500px){
        left: 50%;
        top: 50%;
        height: auto;
        transform: translate(-50%, -50%);
        max-width: 30em;
        max-height: calc(100% - 1em);
        background: rgba(50,50,50) ;
    }
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
    line-height: 1;
    background: #f6f6f7;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
`;

export const ModalTrigger = styled.button` 
    right: 0;
    padding: 0.5em;
    line-height: 1;
    background: #f6f6f7;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
`;

export const ModalCloseIcon = styled.svg`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
    line-height: 1;
    background: #f6f6f7;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
`;
export const ModalBody = styled.div`
    padding-top: 0.25em;
`;
export const HideVisual= styled.span`
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
`;

// .scroll-lock {
// overflow: hidden;
// margin-right: 17px;
// }
