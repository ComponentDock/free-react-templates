import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'
import { welcomePoints } from '../data'

describe('Welcome', () => {
  it('renders the heading pair, checklist, and Learn More button', () => {
    const { container } = render(<Welcome />)

    expect(screen.getByRole('heading', { name: 'Welcome to Salus' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Best Care For Your Good Health' }),
    ).toBeInTheDocument()

    for (const point of welcomePoints) {
      expect(screen.getByText(point)).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()

    // Decorative photo strip: images are present but have no img role.
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
