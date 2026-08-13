import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { about, blog, brand, contact, hero, pricing, schedule, speakers, subscribe } from './data'

describe('App', () => {
  it('renders the navbar brand and the hero headline', () => {
    render(<App />)
    // The brand link appears in both the navbar and the footer.
    expect(screen.getAllByRole('link', { name: `${brand.name}.` }).length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { level: 1, name: hero.slides[0]!.heading }),
    ).toBeInTheDocument()
  })

  it('renders every section in order', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: subscribe.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: speakers.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: schedule.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: pricing.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: blog.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: contact.heading })).toBeInTheDocument()
  })

  it('renders the map placeholder, footer and countdown', () => {
    render(<App />)
    expect(screen.getByTestId('map')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('countdown')).toBeInTheDocument()
  })
})
