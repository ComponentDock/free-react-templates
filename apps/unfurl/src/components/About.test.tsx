import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders the about heading and subtitle', () => {
    render(<About />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('We can make it together')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)

    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })

  it('renders download CV button', () => {
    render(<About />)

    const button = screen.getByText('Download my CV')
    expect(button).toBeInTheDocument()
    expect(button.closest('a')).toHaveAttribute('href', '#')
  })

  it('renders the portrait image', () => {
    render(<About />)

    const img = screen.getByRole('img', { name: /about me portrait/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
