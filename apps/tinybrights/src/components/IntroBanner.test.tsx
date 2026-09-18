import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroBanner } from './IntroBanner'

describe('IntroBanner', () => {
  it('renders the heading', () => {
    render(<IntroBanner />)
    expect(
      screen.getByRole('heading', { name: /Where Every Day is an Adventure/i }),
    ).toBeInTheDocument()
  })
})
