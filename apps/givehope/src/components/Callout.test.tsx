import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Callout } from './Callout'

describe('Callout', () => {
  it('renders the headline, description, and CTA button', () => {
    render(<Callout />)

    expect(
      screen.getByRole('heading', { name: /be a part of the breakthrough/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/heaven fruitful lesser days/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })
})
