import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the tagline, headline with a green highlight, and both CTAs', () => {
    render(<Hero />)

    const section = document.querySelector('section')
    expect(section).not.toBeNull()
    expect(section?.className).toContain('min-h-[750px]')
    expect(document.querySelector('section [class*="bg-dark/40"]')).not.toBeNull()

    expect(
      screen.getByText('Finding Balance In Food, Health and Wellness', { exact: false }),
    ).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Eat Mindfully, Sweat Often & Self Love Always')
    const highlight = heading.querySelector('.text-brand')
    expect(highlight?.textContent).toBe('Sweat Often & Self Love Always')

    const contact = screen.getByRole('link', { name: 'Contact us' })
    expect(contact).toHaveAttribute('href', '#appointment')
    expect(contact.className).toContain('bg-brand')
    expect(contact.className).toContain('rounded-none')

    const learn = screen.getByRole('link', { name: 'Learn More' })
    expect(learn).toHaveAttribute('href', '#about')
    expect(learn.className).toContain('bg-white')
  })

  it('renders a cover background image with a photo overlay', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section?.style.backgroundImage).toContain('picsum.photos')
    expect(section?.className).toContain('bg-cover')
  })
})
