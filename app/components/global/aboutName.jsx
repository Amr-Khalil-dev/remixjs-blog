import { useLoaderData } from '@remix-run/react';
import React from 'react'

export default function AboutName() {
    const data1 = useLoaderData();
    console.log(data1)
  return (
    <div>aboutName</div>
  )
}
