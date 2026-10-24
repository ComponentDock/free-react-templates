import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and the freebie call-to-action', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/A Clean and Modern Template/)

    expect(screen.getByRole('link', { name: 'Get your freebie template now!' })).toBeInTheDocument()
  })
})
