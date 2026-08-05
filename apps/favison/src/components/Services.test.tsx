import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the three service cards with titles, blurbs, and read-more links', () => {
    render(<Services />)

    for (const title of ['Unique Design', 'Business Solution', 'Customer Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
    expect(screen.getByText(/earth face earth behold/)).toBeInTheDocument()
  })
})
