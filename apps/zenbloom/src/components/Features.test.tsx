import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders heading and 3 feature items', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Control Your Body/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Body & Mind Balance/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Healthy Daily Life/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Improves Flexibility/i })).toBeInTheDocument()
  })
})
