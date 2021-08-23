import React from 'react'
import { CardHeading, CardWrapper, CardButton, CardBody, CardAddButton, CardHeader, TBody, TRow, TData } from '../../style/Card'
import { removeWorkstation, updateWorkstation } from '../../store/workstations'
import { useDispatch } from 'react-redux'

export default function WorkstationCard(props) {
  const dispatch = useDispatch();

  const workstation = {
    
  }
  return (
    <CardWrapper> 
      <CardHeader>{props.workstation.name}</CardHeader>
      <CardBody>
          <CardHeading>Items</CardHeading>
            <TBody>
              <TRow>
                <TData>Monitors: {props.workstation.monitors}</TData>
                <TData>
                  <CardAddButton onClick={() =>
                    dispatch(updateWorkstation({
                      id: props.workstation.id,
                      monitors: props.workstation.monitors+1}))}>
                    +
                  </CardAddButton>
                </TData>
                <TData><CardAddButton>+</CardAddButton></TData>
              </TRow>
            </TBody>
          <CardButton onClick={() => 
            dispatch(removeWorkstation({id: props.id}))} type="button">
            Delete Workstation
          </CardButton>
      </CardBody>
    </CardWrapper>   
  );

}