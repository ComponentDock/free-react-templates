import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the section title, circle-framed photo, heading and checklist', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: 'About Unison' })).toBeInTheDocument()

    const image = screen.getByRole('img', { name: 'Unison studio team at work' })
    expect(image).toHaveAttribute('src', expect.stringContaining('unison-about'))

    expect(screen.getByRole('heading', { name: 'For the next great business' })).toBeInTheDocument()
    for (const check of [
      'A small river named Duden flows by their place',
      'It is a paradisematic country, in which roasted parts',
      'Separated they live in Bookmarksgrove',
      'A large language ocean at the coast',
    ]) {
      expect(screen.getByText(check)).toBeInTheDocument()
    }
  })

  it('renders a Get In Touch CTA that scrolls to the contact section', () => {
    render(<AboutSection />)
    const cta = screen.getByRole('link', { name: 'Get In Touch' })
    expect(cta).toHaveAttribute('href', '#contact-section')
  })
})
