import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'A very Lovely Welcome to our Company',
    )
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getByText(/dedicated nonprofit organization/)).toBeInTheDocument()
  })

  it('renders the learn more button', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toHaveAttribute('href', '#donate')
  })

  it('renders an image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about givingheart/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/givingheart-about/800/600')
  })

  it('has a dark background', () => {
    render(<About />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    expect(section.className).toContain('bg-dark')
  })

  it('uses a 2-column grid layout', () => {
    render(<About />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    const grid = section.querySelector('.grid')
    expect(grid).toBeInTheDocument()
  })
})
