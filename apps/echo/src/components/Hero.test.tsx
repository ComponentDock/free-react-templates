import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the greeting and name', () => {
    render(<Hero />)
    expect(screen.getByText("Hello! I'm")).toBeInTheDocument()
    expect(screen.getByText('Echo')).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
