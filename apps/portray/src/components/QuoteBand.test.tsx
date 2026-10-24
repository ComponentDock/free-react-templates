import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QuoteBand } from './QuoteBand'
import { quote } from '../data'

describe('QuoteBand', () => {
  it('splits the neon band into a photograph and an oversized quote', () => {
    const { container } = render(<QuoteBand />)
    expect(container.querySelector('section')?.className).toContain('bg-neon')
    const photo = screen.getByRole('img', { name: 'The designer at work by a window' })
    expect(photo).toHaveAttribute('src', quote.photo)
    const blockquote = container.querySelector('blockquote')
    expect(blockquote).toHaveTextContent(quote.text)
    expect(blockquote?.textContent?.startsWith('“')).toBe(true)
    expect(blockquote?.textContent?.endsWith('”')).toBe(true)
    expect(container.querySelector('section h2')).toBeNull()
  })
})
