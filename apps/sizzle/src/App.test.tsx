import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brand, hero, about, menuItems, reservation, blogPosts, footer } from './data'

describe('App', () => {
  it('renders the header with the brand logo', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: brand.name })).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.cta })).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: about.heading })).toBeInTheDocument()
  })

  it('renders the menu section with cards', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'What kind of Foods we serve for you' }),
    ).toBeInTheDocument()
    for (const item of menuItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    }
  })

  it('renders the reservation section with its form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: reservation.heading })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Food and Customer Gallery' }),
    ).toBeInTheDocument()
  })

  it('renders the reviews carousel', () => {
    render(<App />)
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
  })

  it('renders the blog section with posts', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Latest From Our Blog' }),
    ).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the footer with the Component Dock credit', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(footer.address)).toBeInTheDocument()
  })
})
