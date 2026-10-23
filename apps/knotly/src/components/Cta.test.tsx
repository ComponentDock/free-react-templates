import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, copy, and Browse Job button', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Start finding your dream job' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Browse thousands of roles matched to your skills/)).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'Browse Job' })
    expect(button).toHaveAttribute('href', '#contact')
  })
})
