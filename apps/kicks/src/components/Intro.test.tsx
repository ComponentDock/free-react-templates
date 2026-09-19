import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the introductory quote', () => {
    render(<Intro />)
    expect(screen.getByText(/It started with a simple idea/)).toBeInTheDocument()
  })

  it('renders the full quote text', () => {
    render(<Intro />)
    expect(
      screen.getByText(/Create quality, well-designed products that I wanted myself/),
    ).toBeInTheDocument()
  })
})
