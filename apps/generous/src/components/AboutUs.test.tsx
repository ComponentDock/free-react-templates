import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('shows the heading, copy and the right-side links', () => {
    render(<AboutUs />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Join Volunteer' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
  })

  it('shows the three mini-cards with thumbnails', () => {
    const { container } = render(<AboutUs />)
    expect(screen.getByRole('heading', { level: 3, name: 'Give Meal A Day' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Free Education For African Children' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Join As A Volunteers' }),
    ).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
