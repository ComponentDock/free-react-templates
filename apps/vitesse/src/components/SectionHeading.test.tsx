import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders a centered heading with a dark title by default', () => {
    const { container } = render(
      <SectionHeading eyebrow="Our Services" title="What We Can Do For You" />,
    )
    expect(screen.getByText('Our Services')).toHaveClass('text-accent')
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('What We Can Do For You')
    expect(heading).toHaveClass('text-dark')
    expect(container.firstElementChild).toHaveClass('text-center')
  })

  it('renders left-aligned with a white title when light', () => {
    const { container } = render(
      <SectionHeading
        eyebrow="Clients Testimonials"
        title="What Our Clients Say!"
        light
        align="left"
      />,
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
    expect(container.firstElementChild).toHaveClass('text-left')
  })
})
