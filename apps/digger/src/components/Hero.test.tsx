import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero title and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Digger')).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })
})
