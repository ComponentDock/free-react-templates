import { render, screen } from '@testing-library/react'
import { Services2 } from './Services2'

describe('Services2', () => {
  it('renders all three feature cards', () => {
    render(<Services2 />)
    expect(screen.getByText('Expert & Professional')).toBeInTheDocument()
    expect(screen.getByText('High Quality Work')).toBeInTheDocument()
    expect(screen.getByText('24/7 Help Support')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<Services2 />)
    expect(screen.getByText(/seasoned professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/premium materials/i)).toBeInTheDocument()
    expect(screen.getByText(/round-the-clock support/i)).toBeInTheDocument()
  })
})
