import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About2 } from './About2'

describe('About2', () => {
  it('renders the heading', () => {
    render(<About2 />)
    expect(screen.getByRole('heading', { name: /We Are Here To Help/i })).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About2 />)
    const img = screen.getByRole('img', { name: /Legal consultation meeting/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/statute-about2/800/600')
  })

  it('renders the CTA link', () => {
    render(<About2 />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the descriptive paragraphs', () => {
    render(<About2 />)
    expect(screen.getByText(/proven track record/i)).toBeInTheDocument()
    expect(screen.getByText(/criminal defense/i)).toBeInTheDocument()
  })
})
