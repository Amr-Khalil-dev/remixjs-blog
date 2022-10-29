import { useOutletContext } from '@remix-run/react'
import React from 'react'

export default function Header() {
    const data = useOutletContext();
  return (
    <div style={{width:"100%",mbackgroundColor:"red"}}>{data.myblog.title}</div>
  )
}
