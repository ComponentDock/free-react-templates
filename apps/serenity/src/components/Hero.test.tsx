import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows a level-1 headline for the spa center', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Spa & Beauty Center/)
  })

  it('shows the Get in Touch and Contact actions linking to sections', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Get in Touch' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#about')
  })
})
