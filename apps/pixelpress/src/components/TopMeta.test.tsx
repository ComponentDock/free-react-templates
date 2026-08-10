import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopMeta } from './TopMeta'

describe('TopMeta', () => {
  it('renders the date, separator and magenta category link', () => {
    render(<TopMeta date="11.11.18" category="Games" />)
    expect(screen.getByText(/11\.11\.18 \/ in/)).toBeInTheDocument()
    const category = screen.getByRole('link', { name: 'Games' })
    expect(category).toHaveClass('text-magenta')
  })

  it('uses the muted dark variant on light panels', () => {
    render(<TopMeta date="11.11.18" category="Reviews" dark />)
    expect(screen.getByText(/11\.11\.18 \/ in/)).toHaveClass('text-muted')
  })
})
