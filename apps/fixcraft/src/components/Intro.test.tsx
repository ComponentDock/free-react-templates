import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders heading', () => {
    render(<Intro />)
    expect(screen.getByText(/We care about your car/)).toBeDefined()
  })

  it('renders experience badge', () => {
    render(<Intro />)
    expect(screen.getByText('45+ Years of Experience')).toBeDefined()
  })

  it('renders phone CTA', () => {
    render(<Intro />)
    expect(screen.getByText('+01 (123) 456 7890')).toBeDefined()
  })

  it('renders image', () => {
    render(<Intro />)
    const img = screen.getByRole('img')
    expect(img).toBeDefined()
  })
})
