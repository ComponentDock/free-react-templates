import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and the five feature cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Loaded With Features You Would Surely Love.',
      }),
    ).toBeInTheDocument()

    for (const title of [
      'Cloud Based',
      'Voice & Video',
      'Always Secure',
      'Play Games',
      'Group Chat',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
