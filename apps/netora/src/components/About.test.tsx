import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the split layout with image, copy, and solid Learn More button', () => {
    const { container } = render(<About />)
    const section = screen.getByRole('region', { name: 'About' })
    expect(within(section).getByText('About Us')).toBeInTheDocument()
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: 'Build your amazing website with Netora',
      }),
    ).toBeInTheDocument()
    expect(within(section).getAllByRole('paragraph')).toHaveLength(2)
    const learnMore = within(section).getByRole('link', { name: 'Learn More' })
    expect(learnMore).toHaveAttribute('href', '#services')
    expect(learnMore.className).toContain('bg-brand')
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(1)
    expect(images[0]).toHaveAttribute('alt', 'A laptop and workspace setup on a desk')
  })
})
