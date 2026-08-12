import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, subtext, and the green Start button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'We are here to help you get started' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Phasellus vehicula tempus orci vel consequat/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start' })).toHaveClass('bg-brand')
  })
})
