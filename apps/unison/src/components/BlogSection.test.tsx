import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders three blog cards with title, meta and excerpt', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: 'Repudiandae Quisquam Eaque Dolore' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Jan 18, 2019/)).toHaveLength(3)
    expect(screen.getByText(/Ham Brook/)).toBeInTheDocument()
    expect(screen.getByText(/James Phelps/)).toBeInTheDocument()
    expect(screen.getByText(/James West/)).toBeInTheDocument()
  })

  it('renders Continue Reading links for every post', () => {
    render(<BlogSection />)
    const links = screen.getAllByRole('link', { name: /Continue Reading/ })
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveAttribute('href', '#blog-section')
  })
})
