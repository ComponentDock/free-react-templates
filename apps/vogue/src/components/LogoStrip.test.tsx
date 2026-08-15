import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LogoStrip } from './LogoStrip'
import { logoWordmarks } from '../data'

describe('LogoStrip', () => {
  it('renders five ghosted wordmark tiles that brighten on hover', () => {
    render(<LogoStrip />)
    expect(screen.getByRole('region', { name: 'Brand partners' })).toBeInTheDocument()
    expect(logoWordmarks).toHaveLength(5)
    for (const word of logoWordmarks) {
      const tile = screen.getByText(word)
      expect(tile.className).toContain('opacity-10')
      expect(tile.className).toContain('hover:opacity-100')
    }
  })
})
