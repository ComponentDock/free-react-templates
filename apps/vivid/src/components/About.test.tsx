import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to Website')
  })

  it('renders all three feature cards', () => {
    render(<About />)
    expect(screen.getByText('Fully Customizable')).toBeInTheDocument()
    expect(screen.getByText('Awesome Features')).toBeInTheDocument()
    expect(screen.getByText('Fully Responsive')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<About />)
    const descriptions = screen.getAllByText(/Maecenas tempus tellus/)
    expect(descriptions.length).toBe(3)
  })

  it('renders Read more links', () => {
    render(<About />)
    const links = screen.getAllByText('Read more')
    expect(links.length).toBe(3)
  })
})
