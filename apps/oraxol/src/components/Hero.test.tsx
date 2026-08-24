import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading with the value proposition', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Create Minimal & Functional Website/i)
  })

  it('shows the freelance availability link', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /available for freelance work/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Hero />)

    const socialLinks = screen.getAllByRole('link')
    const socialMediaLinks = socialLinks.filter(
      (l) =>
        l.getAttribute('href')?.includes('twitter.com') ||
        l.getAttribute('href')?.includes('facebook.com') ||
        l.getAttribute('href')?.includes('instagram.com') ||
        l.getAttribute('href')?.includes('dribbble.com'),
    )
    expect(socialMediaLinks.length).toBeGreaterThanOrEqual(4)
  })
})
