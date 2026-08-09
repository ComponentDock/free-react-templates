import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the heading and two post cards', () => {
    render(<BlogSection />)

    expect(screen.getByRole('heading', { name: 'our recent news' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(
      screen.getByRole('heading', { name: /Footprints in Time is perfect House in Kurashiki/ }),
    ).toBeInTheDocument()
  })

  it('renders a read-more link on each post', () => {
    render(<BlogSection />)
    expect(screen.getAllByRole('link', { name: /became a member/ }).length).toBeGreaterThanOrEqual(
      2,
    )
  })
})
