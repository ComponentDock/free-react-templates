import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the label and heading', () => {
    render(<SectionHeading label="Events" heading="Upcoming Events" />)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
  })

  it('renders the light variant with white heading', () => {
    const { container } = render(
      <SectionHeading label="Testimonial" heading="Happy Members" light />,
    )
    const heading = screen.getByRole('heading', { name: 'Happy Members' })
    expect(heading.className).toContain('text-white')
    expect(container.querySelector('span')).toBeInTheDocument()
  })
})
