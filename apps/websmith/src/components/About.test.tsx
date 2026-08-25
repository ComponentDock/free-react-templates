import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the eyebrow and heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Expert In Web/i })).toBeInTheDocument()
  })

  it('renders the about photo', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Our web development workspace/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders all six expertise items', () => {
    render(<About />)
    const items = ['Design', 'Development', 'eCommerce', 'Mobile Apps', 'Copywriting', 'SEO']
    for (const item of items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })

  it('renders the watch video link with play icon', () => {
    render(<About />)
    expect(
      screen.getByRole('link', { name: /Watch the video about our team/i }),
    ).toBeInTheDocument()
  })

  it('renders the about section with correct id', () => {
    render(<About />)
    expect(document.getElementById('about-section')).toBeInTheDocument()
  })

  it('renders a description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/passionate team of designers/i)).toBeInTheDocument()
  })
})
