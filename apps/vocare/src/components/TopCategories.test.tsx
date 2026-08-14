import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopCategories } from './TopCategories'

describe('TopCategories', () => {
  it('renders six category cards with captions', () => {
    render(<TopCategories />)
    const names = [
      'Website & Software',
      'Education & Training',
      'Graphic & UI/UX Design',
      'Accounting & Finance',
      'Restaurant & Food',
      'Health & Hospital',
    ]
    for (const name of names) {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Open position/)).toHaveLength(6)
  })

  it('marks the second card (Education & Training) as active with the orange background', () => {
    render(<TopCategories />)
    const active = screen.getByRole('link', { name: /Education & Training/ })
    expect(active.className).toContain('bg-accent')
    const first = screen.getByRole('link', { name: /Website & Software/ })
    expect(first.className).not.toContain('bg-accent')
  })
})
