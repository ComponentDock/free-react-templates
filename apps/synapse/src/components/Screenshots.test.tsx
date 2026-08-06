import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the heading and at least three screenshot images', () => {
    render(<Screenshots />)

    expect(
      screen.getByRole('heading', { name: 'Unique Screens that work perfectly' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
})
