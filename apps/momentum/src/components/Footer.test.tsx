import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { brand, footer } from '../data'

describe('Footer', () => {
  it('renders four circular social buttons and the Component Dock link', () => {
    const { container } = render(<Footer />)

    const socials = screen.getAllByRole('link', { name: /^(Facebook|Twitter|LinkedIn|Dribbble)$/ })
    expect(socials).toHaveLength(footer.socials.length)
    for (const social of socials) {
      expect(social.className).toContain('rounded-full')
      expect(social.querySelector('svg[aria-hidden="true"]')).not.toBeNull()
    }

    expect(container.querySelectorAll('svg[aria-hidden="true"]').length).toBe(footer.socials.length)
  })

  it('shows the copyright line with the current year and credits Component Dock', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} ${brand}`))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(footer.madeWith))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.componentDockLabel })).toHaveAttribute(
      'href',
      footer.componentDockHref,
    )
  })
})
