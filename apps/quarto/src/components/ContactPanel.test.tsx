import { render, screen } from '@testing-library/react'
import { ContactPanel } from './ContactPanel'
import { contactLede, person } from '../content'

describe('ContactPanel', () => {
  it('renders the eyebrow, the heading and the lede', () => {
    render(<ContactPanel />)

    expect(screen.getByText('04 / SAY HELLO')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'A good conversationis a good start.',
    )
    expect(screen.getByText('start.')).toHaveClass('italic')
    expect(screen.getByText(contactLede)).toBeInTheDocument()
  })

  it('wraps the email in a mailto link with the outlined button shape', () => {
    render(<ContactPanel />)

    const link = screen.getByRole('link', { name: new RegExp(person.email) })
    expect(link).toHaveAttribute('href', `mailto:${person.email}`)
    expect(link).toHaveClass('q-btn-outline')
  })

  it('keeps the sample notice about the demo address', () => {
    render(<ContactPanel />)

    expect(screen.getByText(/Demo email address/)).toBeInTheDocument()
  })
})
