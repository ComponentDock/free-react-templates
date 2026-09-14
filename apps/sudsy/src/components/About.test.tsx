import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /latest equipment/i })).toBeInTheDocument()
    expect(screen.getByText(/state-of-the-art facility/i)).toBeInTheDocument()
  })

  it('shows the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /car wash equipment/i })).toBeInTheDocument()
  })

  it('links to contact section', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /About Us/i })).toHaveAttribute('href', '#contact')
  })
})
