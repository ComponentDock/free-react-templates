import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { IMAGES } from '../data'

describe('Hero', () => {
  it('renders the full-height photo hero with right-aligned copy and Shop Now', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')
    expect(section).not.toBeNull()
    expect(section).toHaveStyle({ backgroundImage: `url(${IMAGES.hero})` })
    expect(section).toHaveClass('min-h-[600px]')

    const headline = screen.getByRole('heading', { level: 1, name: 'Finding Your Perfect Shoes' })
    expect(headline).toHaveClass('font-black')

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'Shop Now' })
    expect(button).toHaveAttribute('href', '#shop')
    expect(button).toHaveClass('bg-brand', 'uppercase')
  })
})
