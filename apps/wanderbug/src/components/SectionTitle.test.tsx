import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the periwinkle eyebrow above the headline', () => {
    render(<SectionTitle eyebrow="Check our best promotional tour" title="Upcoming Events" />)

    expect(screen.getByText('Check our best promotional tour')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
  })

  it('omits the eyebrow when the section has none', () => {
    render(<SectionTitle title="What customers say" />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What customers say' }),
    ).toBeInTheDocument()
    expect(screen.queryByText(/promotional/)).not.toBeInTheDocument()
  })
})
