import React from 'react'

interface Props {
  title: String
  children: React.ReactNode
}

export default function Accordion({ title, children }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}
