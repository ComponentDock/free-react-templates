import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders the heading, all four feature cards, and the center photo', () => {
    const { container } = render(<Features />)

    expect(
      screen.getByRole('heading', { name: "We'll Handle Any Problems and Solve Them" }),
    ).toBeInTheDocument()

    for (const feature of features) {
      expect(screen.getByRole('heading', { name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.text)).toBeInTheDocument()
    }

    // Decorative center photo (alt="" -> no img role).
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/60/800/1000',
    )
  })
})
