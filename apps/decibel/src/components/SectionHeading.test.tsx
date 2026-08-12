import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('shows the title with a pink underline and an optional intro', () => {
    render(<SectionHeading title="Upcoming Shows" intro="Weekly line-up." />)
    expect(screen.getByRole('heading', { name: 'Upcoming Shows' })).toBeInTheDocument()
    expect(screen.getByText('Weekly line-up.')).toBeInTheDocument()
    expect(document.querySelector('span[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('omits the intro when not provided', () => {
    render(<SectionHeading title="Our DJs" />)
    expect(screen.getByRole('heading', { name: 'Our DJs' })).toBeInTheDocument()
    expect(screen.queryByText(/Weekly line-up/)).not.toBeInTheDocument()
  })
})
