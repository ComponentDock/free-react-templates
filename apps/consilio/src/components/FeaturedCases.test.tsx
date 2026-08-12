import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCases } from './FeaturedCases'

describe('FeaturedCases', () => {
  it('shows the eyebrow and heading', () => {
    render(<FeaturedCases />)

    expect(screen.getByText('Our Portfolios of Cases')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Featured Case Study' }),
    ).toBeInTheDocument()
  })

  it('renders four cards with a tag and a title link', () => {
    render(<FeaturedCases />)

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)

    expect(screen.getByText('Strategy planning')).toBeInTheDocument()
    expect(screen.getByText('Market entry')).toBeInTheDocument()
    expect(screen.getByText('Operations')).toBeInTheDocument()
    expect(screen.getByText('Digital growth')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /construction industry as their overdraft/ }),
    ).toBeInTheDocument()
  })
})
