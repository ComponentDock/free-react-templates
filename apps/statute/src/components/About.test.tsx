import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Dedicated to Give You/i })).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /Our legal team at work/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/statute-about/800/600')
  })

  it('renders the CTA link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/25 years of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/client-first approach/i)).toBeInTheDocument()
  })
})
