import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and social links', () => {
    render(<Footer />)
    expect(screen.getByText('Lexicon')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Wenceslas Square, Prague, Czech Republic')).toBeInTheDocument()
    expect(screen.getByText('+1 555 234 5678')).toBeInTheDocument()
    expect(screen.getByText('info@lexicon.com')).toBeInTheDocument()
  })

  it('renders newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByLabelText('Subscribe'))
    expect(input).toHaveValue('')
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    expect(screen.getByText('Component Dock').closest('a')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
