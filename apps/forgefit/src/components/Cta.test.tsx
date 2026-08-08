import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline and both buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { name: 'Your Transformation Starts Today' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Claim Free Week' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: /Talk to a Trainer/ })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
