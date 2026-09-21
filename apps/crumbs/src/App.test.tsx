import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Crumbs — Cake Shop Landing')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Delicious Cake For Everyone/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Exclusive Cakes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /A Simple Way to/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Quality is Our First Priority/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Customers Say/i })).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders logo, nav links, phone, and CTA button', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(within(header).getByRole('link', { name: 'Crumbs' })).toBeInTheDocument()
    expect(within(header).getByText('Home')).toBeInTheDocument()
    expect(within(header).getByText('Product')).toBeInTheDocument()
    expect(within(header).getByText('About')).toBeInTheDocument()
    expect(within(header).getByText('Blog')).toBeInTheDocument()
    expect(within(header).getByText('Contact')).toBeInTheDocument()
    expect(within(header).getByText('+10 (56) 745 3095')).toBeInTheDocument()
    expect(within(header).getByRole('button', { name: 'Order Online' })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile link (the one inside the dropdown)
    const mobileLinks = screen.getAllByText('About')
    const mobileLink = mobileLinks.find((el) => el.tagName === 'A' && el.closest('.border-t'))
    if (mobileLink) {
      await user.click(mobileLink)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    }
  })
})

describe('Hero', () => {
  it('renders heading, watermark, and CTA', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /Delicious Cake For Everyone/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Delicious')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Explore Menu/i })).toBeInTheDocument()
  })
})

describe('PopularProducts', () => {
  it('renders three product cards with order buttons', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Our Exclusive Cakes/i })).toBeInTheDocument()

    const orderButtons = screen.getAllByText(/\$20.*Order Now/)
    expect(orderButtons).toHaveLength(3)

    expect(screen.getByRole('heading', { name: 'Chocolate' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sweetheart' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Blackforest' })).toBeInTheDocument()
  })

  it('has accessible product images', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: 'Chocolate' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Sweetheart' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Blackforest' })).toBeInTheDocument()
  })
})

describe('About', () => {
  it('renders heading and CTA button', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /A Simple Way to/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Our Story/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Cakes from our bakery/i })).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders three feature cards', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /Quality is Our First Priority/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Custom Cakes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fresh Delivery' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Made with Love' })).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders at least one testimonial with name and role', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /What Customers Say/i })).toBeInTheDocument()
    expect(screen.getByText('Olivia Jenkins')).toBeInTheDocument()
    expect(screen.getByText('Event Planner')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders Quick Links and Cakes columns', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Quick Links')).toBeInTheDocument()
    expect(within(footer).getByText('Cakes')).toBeInTheDocument()
    expect(within(footer).getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<App />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})
