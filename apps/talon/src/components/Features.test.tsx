import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and four feature items', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()

    const featureHeadings = screen.getAllByRole('heading', { level: 3 })
    const titles = featureHeadings.map((h) => h.textContent)
    expect(titles).toContain('Expert Team')
    expect(titles).toContain('Quality Work')
    expect(titles).toContain('24/7 Support')
    expect(titles).toContain('Affordable Price')
    expect(featureHeadings).toHaveLength(4)
  })
})
