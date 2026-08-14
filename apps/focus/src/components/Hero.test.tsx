import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HERO } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the brand line, headline, blurb and ghost CTA', () => {
    render(<Hero />)
    expect(screen.getByText('FOCUS')).toBeInTheDocument()
    expect(screen.getByText('Photographer / San Francisco')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /We Make Something Great/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(HERO.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
  })

  it('renders the full-viewport background photo with an overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section).toHaveStyle({ backgroundImage: `url(${HERO.photo})` })
    expect(section.querySelector('div[aria-hidden="true"]')).toHaveClass('bg-black/50')
  })

  it('scrolls to the contact section when the CTA is clicked', () => {
    const scrollSpy = vi.spyOn(Element.prototype, 'scrollIntoView')
    const contact = document.createElement('div')
    contact.id = 'contact'
    document.body.appendChild(contact)
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Contact Us' })
    cta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(cta)
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth' })
    contact.remove()
  })
})
