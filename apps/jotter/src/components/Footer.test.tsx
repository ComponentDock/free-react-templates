import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FOOTER_ARCHIVES, FOOTER_CATEGORIES, FOOTER_QUESTIONS } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the dark navy footer with the three widget columns', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-footer')

    expect(within(footer).getByRole('heading', { name: 'Category' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Archives' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
  })

  it('lists the category and archive rows with muted hover styling', () => {
    render(<Footer />)

    for (const item of FOOTER_CATEGORIES) {
      expect(screen.getByText(item)).toHaveClass('text-white/50')
    }
    for (const item of FOOTER_ARCHIVES) {
      expect(screen.getByText(item)).toHaveClass('text-white/50')
    }
  })

  it('shows the address, phone and email with icons in the questions column', () => {
    render(<Footer />)

    expect(screen.getByText(FOOTER_QUESTIONS.address)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_QUESTIONS.phone)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_QUESTIONS.email)).toBeInTheDocument()

    const questions = screen.getByRole('heading', { name: 'Have a Questions?' }).closest('div')!
    expect(questions.querySelector('svg.lucide-map-pin')).toBeInTheDocument()
    expect(questions.querySelector('svg.lucide-phone')).toBeInTheDocument()
    expect(questions.querySelector('svg.lucide-mail')).toBeInTheDocument()
  })

  it('shows the bottom bar with the copyright line, Component Dock link and socials', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/Copyright ©2026 All rights reserved/)).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    for (const social of ['Facebook', 'Twitter', 'Instagram', 'Linkedin']) {
      expect(within(footer).getByRole('link', { name: social })).toBeInTheDocument()
    }
  })
})
