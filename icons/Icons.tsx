import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faRotateLeft, faSackDollar, faTicket } from '@fortawesome/free-solid-svg-icons'

export function CheckIcon() {
  return (
    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#38b2ac",}} />
  )
}

export function MoneyBack() {
  return (
    <FontAwesomeIcon fontSize={"48px"} icon={faSackDollar} style={{color: "#38b2ac",}} />
  )
}

export function HassleFree() {
  return (
    <FontAwesomeIcon fontSize={"48px"} icon={faTicket} style={{color: "#38b2ac",}} />
  )
}

export function MonthlySubscription() {
  return (
    <FontAwesomeIcon fontSize={"48px"} icon={faRotateLeft} style={{color: "#38b2ac",}} />
  )
}