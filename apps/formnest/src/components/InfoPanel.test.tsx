import { render, screen } from '@testing-library/react'
import { InfoPanel } from './InfoPanel'

describe('InfoPanel', () => {
  it('renders the heading', () => {
    render(<InfoPanel />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Let's work together")
  })

  it('renders the lorem ipsum paragraphs', () => {
    render(<InfoPanel />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText(/Quasi optio numquam/)).toBeInTheDocument()
    expect(screen.getByText(/Dolor aliquid/)).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<InfoPanel />)
    const link = screen.getByText('info@mywebsite.com')
    expect(link).toHaveAttribute('href', 'mailto:info@mywebsite.com')
  })
})
