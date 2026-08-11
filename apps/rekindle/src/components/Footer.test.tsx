import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  copyright,
  credit,
  followUsNames,
  followUsTagline,
  followUsTitle,
  footerAboutBlurb,
  footerAboutTitle,
  footerInstagramCount,
  footerInstagramTitle,
  footerNewsletterLabel,
  footerNewsletterPlaceholder,
  footerNewsletterTagline,
  footerNewsletterTitle,
} from '../data'

describe('Footer', () => {
  it('renders the footer on a black background', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveClass('bg-black')
  })

  it('renders the About Us column with a blurb', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerAboutTitle })).toBeInTheDocument()
    expect(screen.getByText(footerAboutBlurb)).toBeInTheDocument()
  })

  it('renders the Newsletter column with a tagline, email input, and arrow button', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerNewsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(footerNewsletterTagline)).toBeInTheDocument()
    const email = screen.getByRole('textbox', { name: footerNewsletterPlaceholder })
    expect(email).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: footerNewsletterLabel })).toBeInTheDocument()
  })

  it('submits the newsletter form without navigating', () => {
    render(<Footer />)
    const form = screen
      .getByRole('textbox', { name: footerNewsletterPlaceholder })
      .closest('form') as HTMLFormElement
    fireEvent.submit(form)
    expect(screen.getByRole('textbox', { name: footerNewsletterPlaceholder })).toBeInTheDocument()
  })

  it('renders the Instagram Feed column with eight square thumbnails', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerInstagramTitle })).toBeInTheDocument()
    const images = Array.from({ length: footerInstagramCount }, (_, index) =>
      screen.getByRole('img', { name: `Instagram feed image ${index + 1}` }),
    )
    expect(images).toHaveLength(footerInstagramCount)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/rekindle-feed-1/200/200')
  })

  it('renders the Follow Us column with four social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: followUsTitle })).toBeInTheDocument()
    expect(screen.getByText(followUsTagline)).toBeInTheDocument()
    for (const name of followUsNames) {
      expect(screen.getByRole('link', { name: `Share on ${name}` })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the ColorLib credit', () => {
    render(<Footer />)
    expect(screen.getByText(`${copyright} | ${credit}`)).toBeInTheDocument()
  })
})
