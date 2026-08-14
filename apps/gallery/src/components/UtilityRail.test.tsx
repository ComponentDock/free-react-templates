import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UtilityRail } from './UtilityRail'

describe('UtilityRail', () => {
  it('renders a fixed vertical rail of labelled icon links', () => {
    render(<UtilityRail />)

    const rail = screen.getByRole('complementary', { name: 'Utility rail' })
    expect(rail).toBeInTheDocument()

    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('href', '#home')

    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: 'Help' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Globe' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com',
    )
    expect(screen.getByRole('link', { name: 'Mail' })).toHaveAttribute(
      'href',
      'mailto:hello@gallery.dev',
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
  })
})
