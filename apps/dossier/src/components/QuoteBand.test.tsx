import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QuoteBand } from './QuoteBand'
import { quote } from '../data'

describe('QuoteBand', () => {
  it('renders the green band with a photo and the serif quote', () => {
    render(<QuoteBand />)
    const section = screen.getByRole('region', { name: 'Quote' })
    expect(section.className).toContain('bg-brand-green')

    expect(screen.getByRole('img', { name: 'Designer at work in the studio' })).toHaveAttribute(
      'src',
      expect.stringContaining('dossier-work'),
    )
    expect(screen.getByRole('blockquote')).toHaveTextContent(quote)
  })
})
