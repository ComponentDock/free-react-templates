import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a level-1 headline and a Learn More button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'More Than Just A Haircut' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#welcome')
  })

  it('shows a photo background of a barber at work', () => {
    render(<Hero />)
    expect(screen.getByAltText(/barber at work/i)).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
