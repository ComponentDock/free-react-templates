import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide heading and a Contact Us button', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We Are Specialist In The Field of Architect/i)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders carousel controls and slide dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
  })

  it('advances to the next slide headline with the next control', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Design That Makes You Feel At Home/i)
  })

  it('wraps from the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We Are Specialist In The Field of Architect/i)
  })

  it('jumps to a slide via its dot and moves back with the previous control', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /Ready To Start Your Home/i,
    )
    await user.click(screen.getByRole('button', { name: /Previous slide/i }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /Design That Makes You Feel At Home/i,
    )
  })
})
