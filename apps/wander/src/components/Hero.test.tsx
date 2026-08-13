import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('fills the viewport with a photo background and a subtle dark overlay', () => {
    const { container } = render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toHaveAttribute('id', 'home')
    expect(section).toHaveClass('h-screen', 'min-h-[700px]')
    expect(section.style.backgroundImage).toContain('wander-santorini')
    expect(container.querySelector('.bg-black\\/20')).toBeInTheDocument()
  })

  it('renders the headline, subheading link, ghost CTA and scroll-down link', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: 'Travel & Tours' })).toBeInTheDocument()
    expect(screen.getByText(/A free template from/)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    const cta = screen.getByRole('link', { name: 'VISIT COMPONENT DOCK' })
    expect(cta).toHaveClass('border-2', 'rounded', 'uppercase', 'tracking-[0.2em]')
    const scroll = screen.getByRole('link', { name: /scroll down/i })
    expect(scroll).toHaveAttribute('href', '#welcome')
  })
})
