import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MoreLink } from './MoreLink'

describe('MoreLink', () => {
  it('renders the label with a right-pointing arrow icon', () => {
    const { container } = render(<MoreLink href="#services">Learn More</MoreLink>)
    const link = screen.getByRole('link', { name: /Learn More/ })
    expect(link).toHaveAttribute('href', '#services')
    expect(link.className).toContain('uppercase')
    expect(link.className).toContain('text-ink')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(
      <MoreLink href="#projects" className="mt-3">
        View All
      </MoreLink>,
    )
    const link = screen.getByRole('link', { name: /View All/ })
    expect(link.className).toContain('mt-3')
    expect(link.className).toContain('hover:text-brand')
  })
})
