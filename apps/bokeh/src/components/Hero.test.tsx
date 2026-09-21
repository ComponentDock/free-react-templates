import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Professional/)).toBeDefined()
    expect(screen.getByText(/Photographer/)).toBeDefined()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Capturing moments/)).toBeDefined()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('View Portfolio')).toBeDefined()
  })

  it('renders social links', () => {
    render(<Hero />)
    expect(screen.getByText('Instagram')).toBeDefined()
    expect(screen.getByText('Twitter')).toBeDefined()
    expect(screen.getByText('Facebook')).toBeDefined()
  })
})
