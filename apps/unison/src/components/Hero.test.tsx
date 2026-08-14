import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the full-viewport photo hero with headline and CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Unison — Creative One Page Template')
    expect(heading).toHaveClass('uppercase', 'font-black')

    const cta = screen.getByRole('link', { name: 'Get In Touch' })
    expect(cta).toHaveAttribute('href', '#contact-section')

    const image = screen.getByAltText('Unison hero — modern open office')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/id/180'))
  })

  it('shows the scroll-down mouse indicator', () => {
    render(<Hero />)
    const indicator = screen.getByRole('link', { name: /Scroll down/i })
    expect(indicator).toHaveAttribute('href', '#about-section')
  })
})
