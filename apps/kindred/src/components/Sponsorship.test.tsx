import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsorship } from './Sponsorship'

describe('Sponsorship', () => {
  it('renders the centered sponsorship headline', () => {
    render(<Sponsorship />)
    expect(
      screen.getByRole('heading', {
        name: 'Sponsorship Scheme, Individual and Corporate Entities Undertake',
      }),
    ).toBeInTheDocument()
  })
})
