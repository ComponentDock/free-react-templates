import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a link to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the Component Dock brand text', () => {
    render(<Footer />)
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })
})
