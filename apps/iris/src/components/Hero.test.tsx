import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HERO_IMAGE, HERO_TEXT } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the black band with a rounded photo card, headline and CTA', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section).toHaveClass('bg-night')
    const card = section.querySelector('.rounded-\\[12px\\]') as HTMLElement
    expect(card).toHaveClass('min-h-[650px]')
    const image = section.querySelector('img')!
    expect(image).toHaveAttribute('src', HERO_IMAGE)
    expect(image).toHaveAttribute('alt', '')
    expect(screen.getByRole('heading', { level: 1, name: /Nature Photoshoot/ })).toBeInTheDocument()
    expect(screen.getByText(HERO_TEXT)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'Explore Gallery' })
    expect(cta).toHaveAttribute('href', '#gallery')
    expect(cta).toHaveClass('bg-brand')
    expect(cta).toHaveClass('rounded-[5px]')
  })

  it('keeps the headline and CTA above the photo overlay', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    const overlay = container.querySelector('.via-black\\/40') as HTMLElement
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    const content = container.querySelector('.z-10') as HTMLElement
    expect(content).toHaveClass('relative')
    expect(content.contains(heading)).toBe(true)
  })
})
