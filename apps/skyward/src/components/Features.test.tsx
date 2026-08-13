import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, subtext, and three feature columns', () => {
    const { container } = render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Why You Should Choose Us' }),
    ).toBeInTheDocument()
    // The subtext and all three blurbs share the same demo copy, so exactly
    // four elements match.
    expect(screen.getAllByText(/Even the all-powerful Pointing/)).toHaveLength(4)
    for (const title of ['Super Fast Server', 'Daily Backups', 'Technical Services']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
