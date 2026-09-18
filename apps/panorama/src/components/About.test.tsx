import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the subtitle and heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Who Are You Guys/i })).toBeInTheDocument()
  })

  it('renders the read-more link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Read more about us/i })).toBeInTheDocument()
  })

  it('renders two images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
