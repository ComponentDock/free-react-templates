import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
  })

  it('renders the sub-heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Who We Are' })).toBeInTheDocument()
  })

  it('renders the feature headings', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Web & Mobile Specialties' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Intuitive Thinkers' })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /About Makely team/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
