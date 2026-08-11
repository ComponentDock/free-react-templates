import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EntryCard } from './EntryCard'
import { entries } from '../data'

describe('EntryCard', () => {
  it('renders category, serif title, date, and thumbnail', () => {
    const { container } = render(<EntryCard entry={entries[0]!} />)
    const first = entries[0]!

    expect(screen.getByRole('link', { name: first.category })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.date)).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('parchment-4'),
    )
  })
})
