import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Platter')).toBeInTheDocument()
  })

  it('renders as a link with the brand name', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: 'Platter' })
    expect(link).toHaveAttribute('href', '#')
  })
})
