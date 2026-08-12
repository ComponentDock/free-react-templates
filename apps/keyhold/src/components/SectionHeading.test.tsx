import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the subheading with gold rules and the title as an h2', () => {
    const { container } = render(
      <SectionHeading subheading="What we offer" title="Exclusive Offer For You" />,
    )

    expect(screen.getByText('What we offer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Exclusive Offer For You' }),
    ).toBeInTheDocument()

    // Decorative gold rule lines sit on either side of the subheading.
    expect(container.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(2)
  })

  it('supports left alignment with a single leading rule', () => {
    const { container } = render(
      <SectionHeading subheading="Services" title="Why Choose Us?" align="left" />,
    )

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(container.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(1)
  })
})
