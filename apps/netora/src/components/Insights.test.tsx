import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Insights } from './Insights'

describe('Insights', () => {
  it('renders the navy CTA band with heading, copy, image, and Learn More', () => {
    const { container } = render(<Insights />)
    const section = screen.getByRole('region', { name: 'Insights' })
    expect(section.className).toContain('bg-navy-deep')
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: 'Insights to help you do what you do better, faster and more profitably.',
      }),
    ).toBeInTheDocument()
    expect(within(section).getByRole('link', { name: 'Learn More' })).toHaveAttribute(
      'href',
      '#case-study',
    )
    expect(container.querySelectorAll('img').length).toBe(1)
  })
})
