import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Your Health is always in the first place')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/comprehensive healthcare solutions/)).toBeInTheDocument()
  })

  it('has a Make an Appointment button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /make an appointment/i })).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toHaveStyle({
      backgroundImage: "url('https://picsum.photos/seed/curenova-hero/1600/600')",
    })
  })
})
