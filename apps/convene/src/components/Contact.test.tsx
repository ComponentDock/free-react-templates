import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByText('Location')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Contact />)
    expect(screen.getByText(/01 Pascale Springs Apt. 339/)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Contact />)
    expect(screen.getByText(/345.67.8910/)).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Contact />)
    expect(screen.getByText('info@convene.com')).toBeInTheDocument()
  })

  it('renders map iframe', () => {
    render(<Contact />)
    expect(screen.getByTitle('Event location map')).toBeInTheDocument()
  })
})
