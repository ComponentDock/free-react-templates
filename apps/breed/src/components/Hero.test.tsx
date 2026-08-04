import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with headline and CTAs', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('We Love Pets')
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download' })).toBeInTheDocument()
  })

  it('moves to the next slide when the next control is pressed', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Care for dogs')
  })

  it('returns to the previous slide when the previous control is pressed', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('We Love Pets')
  })

  it('jumps to a slide when its dot is pressed', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Care for dogs')
  })

  it('stays on the first slide when previous is pressed at the start', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('We Love Pets')
  })

  it('stays on the last slide when next is pressed at the end', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Care for dogs')
  })
})
