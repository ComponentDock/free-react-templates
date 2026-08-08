import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Everything You Need to Succeed/ }),
    ).toBeInTheDocument()
  })

  it('shows at least six feature tiles', () => {
    render(<Features />)
    for (const name of ['Expert-Led Content', 'Hands-On Projects', 'Learn at Your Pace']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(6)
  })
})
