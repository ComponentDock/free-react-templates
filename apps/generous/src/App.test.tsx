import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Generous — Charity Template')
  })

  it('composes every section in the reference order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((h) => h.textContent)
    expect(headings).toEqual([
      'Please Help African Children Give Them A Better Life.',
      'Medical Mission',
      'Make Donation Now',
      'We Need Volunteers',
      'School in Africa Need Renovations',
      'Top Fundraisers',
      'Children Needs Food',
      'Children Needs Food',
      'Children Needs Food',
      'Children Needs Food',
      'Children Needs Food',
      'Children Needs Food',
      'Latest Donations',
      'Jean Smith',
      'Christine Charles',
      'Albert Sluyter',
      'Andrew Holloway',
      'School in Africa Need Renovations. Thanks To All Donors',
      'Latest News',
      'Be A Volunteer Today',
      'You May Save The Life of A Child',
      'Children That Needs Care',
      'About Us',
      'Give Meal A Day',
      'Free Education For African Children',
      'Join As A Volunteers',
      'About Us',
      'Blog',
      'Even the all-powerful Pointing has no control',
      'Even the all-powerful Pointing has no control',
      'Even the all-powerful Pointing has no control',
      'Contact Info',
    ])
  })

  it('renders the main landmark with all section components', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    expect(main?.querySelectorAll('section').length).toBeGreaterThanOrEqual(7)
    expect(screen.getByRole('link', { name: 'Generous' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Donate Now' })).toBeInTheDocument()
  })
})
