import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('RoxyGlow')
  })

  it('renders the first slide subheading', () => {
    render(<Hero />)
    expect(screen.getByText('More than a hotel... an experience')).toBeDefined()
  })

  it('renders the play button with accessible label', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Play introduction video')).toBeDefined()
  })

  it('renders the background image', () => {
    render(<Hero />)
    const bgImg = document.querySelector('img[src*="roxyglow-hero1"]') as HTMLImageElement
    expect(bgImg).toBeDefined()
    expect(bgImg.getAttribute('aria-hidden')).toBe('true')
  })

  it('navigates to the next slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nextBtn = screen.getByLabelText('Next slide')
    await user.click(nextBtn)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Experience Epic Beauty')
    expect(screen.getByText('RoxyGlow Hotel & Resort')).toBeDefined()
  })

  it('navigates to the previous slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const prevBtn = screen.getByLabelText('Previous slide')
    await user.click(prevBtn)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Experience Epic Beauty')
  })

  it('navigates via slide indicator dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBe(2)

    const secondDot = dots[1]!
    await user.click(secondDot)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Experience Epic Beauty')
  })
})
