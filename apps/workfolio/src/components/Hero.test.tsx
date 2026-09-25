import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the greeting text', () => {
    render(<Hero />)
    expect(screen.getByText('Hi there, This is Alex')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Digital product designer')).toBeInTheDocument()
  })

  it('renders the contact button', () => {
    render(<Hero />)
    const btn = screen.getByText('Contact me')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#contact')
  })

  it('has a dark navy background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-navy')
  })
})
