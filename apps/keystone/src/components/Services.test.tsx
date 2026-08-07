import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We Provide the Best Interior Solution for You',
      }),
    ).toBeInTheDocument()
  })

  it('shows the three service cards with blurbs', () => {
    render(<Services />)

    for (const title of ['Architecture', 'Interior Design', 'Urban Design']) {
      const card = screen.getByRole('heading', { level: 3, name: title }).closest('article')
      expect(card).not.toBeNull()
      expect(card).toHaveTextContent(/lorem|design|plan|space/i)
    }
  })
})
