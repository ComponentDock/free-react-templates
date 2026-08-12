import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section subheading and heading', () => {
    render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    // "Catering Services" is both the section heading and the first card title.
    expect(
      screen.getAllByRole('heading', { name: 'Catering Services' }).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('renders the four catering service cards', () => {
    render(<Services />)

    for (const title of ['Birthday Party', 'Business Meetings', 'Wedding Party']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
