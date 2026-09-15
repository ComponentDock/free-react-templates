import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section title and content', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
  })

  it('renders contact button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /contact now/i })).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /about our construction/i })).toBeInTheDocument()
  })
})
