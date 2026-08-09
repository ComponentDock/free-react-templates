import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the brand label, quote, copy, and Read More button', () => {
    render(<Intro />)
    expect(screen.getByText('The Brand')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /i firmly believe that with the right footwear one can rule the world/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/haute curates looks/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#portfolio')
  })
})
