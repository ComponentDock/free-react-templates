import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomeAbout } from './HomeAbout'

describe('HomeAbout', () => {
  it('shows an image with an accessible label and descriptive copy', () => {
    render(<HomeAbout />)

    expect(screen.getByRole('img', { name: /Horses grazing/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /a life that will change you/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#service')
  })
})
