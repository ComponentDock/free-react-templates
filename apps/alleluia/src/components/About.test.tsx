import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Who We Are')
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/vibrant community of believers/)).toBeInTheDocument()
    expect(screen.getByText(/Whether you are seeking/)).toBeInTheDocument()
  })

  it('renders placeholder image', () => {
    render(<About />)
    const img = screen.getByAltText('Church community')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders CTA button', () => {
    render(<About />)
    const cta = screen.getByRole('link', { name: /learn more/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
