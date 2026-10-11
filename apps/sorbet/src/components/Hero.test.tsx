import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the 600px photo hero with the byline linking Component Dock', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.id).toBe('home')
    expect(section.className).toContain('h-[600px]')
    expect(section.className).toContain('bg-top')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/sorbet-hero')

    const headline = screen.getByRole('heading', { level: 1, name: 'Bootstrap 4 UI Kit' })
    expect(headline.className).toContain('uppercase')
    expect(headline.className).toContain('text-[50px]')

    expect(screen.getByText(/Designed by:/)).toBeInTheDocument()
    const attribution = screen.getByRole('link', { name: 'Component Dock' })
    expect(attribution).toHaveAttribute('href', 'https://www.componentdock.com/')

    const avatar = container.querySelector('img')!
    expect(avatar.getAttribute('src')).toContain('picsum.photos/seed/sorbet-person')
    expect(avatar).toHaveAttribute('alt', '')
  })
})
