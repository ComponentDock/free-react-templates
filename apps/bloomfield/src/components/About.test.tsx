import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section title and heading', () => {
    render(<About />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText(/We provide all kinds of fresh flower services/)).toBeInTheDocument()
  })

  it('renders the sub-heading and description', () => {
    render(<About />)
    expect(screen.getByText(/Slow Flowers' Floral Insights/)).toBeInTheDocument()
    expect(screen.getByText(/Dried flowers are having a renaissance/)).toBeInTheDocument()
  })

  it('renders a video play button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders the contact us CTA', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /contact us/i })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
