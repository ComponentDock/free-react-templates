import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders five square tiles with hover overlays', () => {
    const { container } = render(<Instagram />)

    const section = screen.getByRole('region', { name: 'Instagram' })
    const tiles = within(section).getAllByRole('link', { name: /Instagram feed photo/ })
    expect(tiles).toHaveLength(5)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(5)
    expect(images[0]?.getAttribute('src')).toContain('picsum.photos/seed/axiom-insta-')

    const overlay = tiles[0]!.parentElement as HTMLElement
    expect(overlay).toHaveClass('bg-accent/20', 'group-hover:opacity-100')
    expect(tiles[0]!.querySelector('svg')).not.toBeNull()
  })

  it('renders the full-width Visit Our Work band in accent blue', () => {
    render(<Instagram />)

    const band = screen.getByRole('link', { name: 'Visit Our Work' }).closest('div') as HTMLElement
    expect(band).toHaveClass('bg-accent', 'py-10')
    expect(screen.getByRole('link', { name: 'Visit Our Work' })).toHaveAttribute('href', '#work')
  })
})
