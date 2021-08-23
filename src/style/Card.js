
import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  width: 300px;
  margin: 10px auto 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background: rgba(50,50,50) ; !important
`;

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: 32px;
`;

const CardFieldset = styled.fieldset`
  padding: 10px;
  border: 0;
  & + & {
    margin-top: 24px;
  }

`;

const TBody = styled.tbody`
  display:table;
  width:100%;
`;

const TRow = styled.tr`
  display:table-row;
`;

const TData = styled.td`
  display: table-cell;  
`;

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

const CardAddButton = styled.button`
  width: 75%;
  margin-top: 12px;
  padding: 6px 6px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #252525;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const CardButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #c63939;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const CardLink = styled.a`
  display: inline-block;
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

export {TRow, TBody, TData, CardAddButton, CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardInput, CardIcon, CardOptionsNote, CardOptions, CardOptionsItem, CardButton, CardLink}