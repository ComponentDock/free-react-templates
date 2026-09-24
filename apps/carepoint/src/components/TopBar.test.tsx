import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders FAQ link', () => {
    render(<TopBar />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders appointment link', () => {
    render(<TopBar />)
    expect(screen.getByText('Request an Appointment')).toBeInTheDocument()
  })

  it('renders emergency phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(/For Emergencies/)).toBeInTheDocument()
  })

  it('has correct link hrefs', () => {
    render(<TopBar />)
    expect(screen.getByText('FAQ').closest('a')).toHaveAttribute('href', '#faq')
    expect(screen.getByText('Request an Appointment').closest('a')).toHaveAttribute(
      'href',
      '#appointment',
    )
  })
})
