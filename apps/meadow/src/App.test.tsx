import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  blogPosts,
  campaigns,
  donateCards,
  fundAmount,
  heroSlides,
  newsletterCta,
  services,
  stats,
  testimonials,
  volunteers,
} from './data'

describe('App', () => {
  it('renders every section in the recreated design order', () => {
    render(<App />)

    // Top bar + navbar chrome
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Hero
    expect(screen.getAllByText(heroSlides[0]!.eyebrow).length).toBeGreaterThan(0)
    expect(screen.getByText(heroSlides[0]!.title)).toBeInTheDocument()
    expect(screen.getAllByText('Get Started').length).toBeGreaterThan(0)

    // Services
    expect(screen.getByRole('heading', { name: /Over 40K\+/ })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }

    // Campaign
    expect(screen.getByRole('heading', { name: 'Our Campaign' })).toBeInTheDocument()
    for (const item of campaigns) {
      expect(screen.getByText(`Raised: ${item.raised} / Goal: ${item.goal}`)).toBeInTheDocument()
    }

    // Donate CTA
    expect(screen.getByRole('heading', { name: /Join Our Event/ })).toBeInTheDocument()
    for (const card of donateCards) {
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
    }

    // Statistics
    expect(screen.getByRole('heading', { name: 'Technical Statistics' })).toBeInTheDocument()
    for (const stat of stats) {
      expect(screen.getByText(stat.number)).toBeInTheDocument()
    }

    // Volunteers
    expect(screen.getByRole('heading', { name: 'Our Volunteer' })).toBeInTheDocument()
    for (const volunteer of volunteers) {
      expect(screen.getByRole('heading', { name: volunteer.name })).toBeInTheDocument()
    }

    // Testimonials
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()

    // Fund raised
    expect(screen.getByRole('heading', { name: /Do You Care/ })).toBeInTheDocument()
    expect(screen.getByText(fundAmount)).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }

    // Newsletter + footer
    expect(screen.getByRole('heading', { name: 'Subscribe for Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: newsletterCta })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
