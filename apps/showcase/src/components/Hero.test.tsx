import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, name headline, and rotating role line', () => {
    render(<Hero />)
    expect(screen.getByText('Hey! I am')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Alex Rivera')
    const roleLine = screen.getByRole('heading', { level: 2 })
    expect(roleLine).toHaveTextContent(/I'm a Web Designer\./)
  })

  it('renders the left-half indigo wash and a labeled scroll-down indicator', () => {
    const { container } = render(<Hero />)
    const wash = container.querySelector('div[aria-hidden="true"]')
    expect(wash).toHaveClass('bg-brand/10', 'w-1/2')
    const scroll = screen.getByRole('link', { name: 'Scroll down to About section' })
    expect(scroll).toHaveAttribute('href', '#about-section')
  })
})
