import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NOTES_ID, SOCIAL_LINKS, STATS } from '../data/site'
import { MetaBand } from './MetaBand'

describe('MetaBand', () => {
  it('renders four tile links to real external profiles', () => {
    render(<MetaBand />)

    const list = screen.getByRole('list', { name: 'Elsewhere' })
    expect(within(list).getAllByRole('link')).toHaveLength(SOCIAL_LINKS.length)

    for (const social of SOCIAL_LINKS) {
      const tile = screen.getByRole('link', { name: social.label })
      expect(tile).toHaveAttribute('href', social.href)
      expect(tile).toHaveAttribute('target', '_blank')
      expect(tile).toHaveAttribute('rel', 'noreferrer noopener')
      expect(tile.querySelectorAll('svg')).toHaveLength(1)
    }
  })

  it('renders three label/value pairs in one definition list', () => {
    const { container } = render(<MetaBand />)

    expect(container.querySelector('.bv-meta')).toHaveAttribute('id', NOTES_ID)
    expect(screen.getAllByRole('definition')).toHaveLength(STATS.length)
    expect(screen.getAllByRole('term')).toHaveLength(STATS.length)

    for (const stat of STATS) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    }
  })

  it('leaves no dead anchor behind', () => {
    const { container } = render(<MetaBand />)

    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)
  })
})
