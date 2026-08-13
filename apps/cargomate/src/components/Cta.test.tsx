import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the kicker, headline, and white Explore More button', () => {
    render(<Cta />)

    expect(screen.getByText('Get a quick response from our team')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Please feel free to reach us' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore More' })).toHaveAttribute('href', '#quote')
  })
})
