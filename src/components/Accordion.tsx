import { useState } from 'react'

interface Props {
  title: String
  children: React.ReactNode
}

export default function Accordion({ title, children }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h3 id="Title" onClick={() => setOpen(!open)}>
        {title}
      </h3>
      {open && <div id="Content">{children}</div>}
    </div>
  )
}
