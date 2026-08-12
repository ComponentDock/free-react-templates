import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the title and optional intro paragraph', () => {
    render(<SectionHeading title="Work hard stay humble" intro="A short intro" />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Work hard stay humble' }),
    ).toBeInTheDocument()
    expect(screen.getByText('A short intro')).toBeInTheDocument()
  })

  it('renders without an intro paragraph when omitted', () => {
    render(<SectionHeading title="Let's Shop" />)
    expect(screen.getByRole('heading', { level: 2, name: "Let's Shop" })).toBeInTheDocument()
    expect(screen.queryByText('A short intro')).not.toBeInTheDocument()
  })

  it('renders light headings in white', () => {
    render(<SectionHeading title="What we offer" light />)
    const heading = screen.getByRole('heading', { level: 2, name: 'What we offer' })
    expect(heading).toHaveClass('text-white')
  })
})
