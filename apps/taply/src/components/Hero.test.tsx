import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the gradient hero with headline, subtext and phone mockup', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Mobile App Landing Page Template',
    )
    expect(screen.getByText(hero.subtext)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /phone screen/i })).toHaveAttribute(
      'src',
      hero.phoneImage,
    )
  })
})
