import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { DjGrid } from './DjGrid'

describe('DjGrid', () => {
  it('renders six DJ cards that reveal a green overlay with name, role, and socials', () => {
    const { container } = render(<DjGrid />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our DJs' })).toBeInTheDocument()

    const names = screen.getAllByRole('heading', { level: 3 })
    expect(names).toHaveLength(6)
    expect(screen.getAllByText('Creative Director')).toHaveLength(6)

    // Hover overlay per card.
    const overlays = container.querySelectorAll('.group-hover\\:opacity-100')
    expect(overlays).toHaveLength(6)

    // Each card exposes three social icon links.
    const socialLinks = screen.getAllByRole('link', { name: / on (facebook|twitter|instagram)$/ })
    expect(socialLinks).toHaveLength(18)
    expect(within(names[0]!.closest('div') as HTMLElement).getAllByRole('link')).toHaveLength(3)
  })
})
