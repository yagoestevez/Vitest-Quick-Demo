import { fireEvent, render, RenderResult, screen } from '@testing-library/react'

import Accordion from './Accordion'

describe('Component', () => {
  const title = 'Testing Vitest'
  const body = <h2>Accordion test body</h2>
  let DOM: RenderResult

  beforeEach(() => {
    DOM = render(<Accordion title={title}>{body}</Accordion>)
  })

  test('Should render the accordion with the given title', () => {
    expect(screen.getByText(title)).toBeDefined()
  })

  test('Should not show the content on load', () => {
    const content = DOM.container.querySelector('#Content')
    expect(content).toBeNull()
  })

  test('Should show the content after the title has been clicked', () => {
    const title = DOM.container.querySelector('#Title')
    const content = DOM.container.querySelector('#Content')

    expect(title).toBeDefined()
    expect(content).toBeNull()

    fireEvent.click(title!)

    expect(content).toBeDefined()
  })
})
