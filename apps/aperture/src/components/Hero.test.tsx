import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroHeading, heroSectionLabel } from '../data'

describe('Hero', () => {
  it('renders a level-1 heading with the welcome message', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: heroSectionLabel })
    expect(section).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(heroHeading)
  })
})
