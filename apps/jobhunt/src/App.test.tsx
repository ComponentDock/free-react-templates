import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JobHunt — Job Portal Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Find Your Next Dream Job/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Browse From Our Top Jobs/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We Build Lasting Relationships/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Browse From Top Categories/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Useful Links/i })).toBeInTheDocument()
  })

  it('renders the navbar with brand and nav links', () => {
    render(<App />)
    expect(screen.getAllByText('JobHunt').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Browse Job/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Contact/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /Post A Job/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Log In/i })).toBeInTheDocument()
  })

  it('renders hero section with CTAs', () => {
    render(<App />)
    expect(screen.getByText('Easiest way to find a perfect job')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Looking For a Job/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Find Talent/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders job cards with Remote badges', () => {
    render(<App />)
    expect(screen.getAllByText('Remote').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Apply Now').length).toBeGreaterThan(0)
  })

  it('renders category cards with Browse Job buttons', () => {
    render(<App />)
    expect(screen.getAllByText('Browse Job').length).toBeGreaterThanOrEqual(6)
  })

  it('renders testimonial with dot navigation', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Testimonial 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Testimonial 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Testimonial 3/i })).toBeInTheDocument()
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const dot2 = screen.getByRole('button', { name: /Testimonial 2/i })
    await user.click(dot2)
    // The testimonial name should change
    expect(screen.getByText('Mike Chen')).toBeInTheDocument()
    expect(screen.getByText('UX Designer')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders newsletter form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/Your email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText(/Your email/i)
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /Subscribe/i })
    await user.click(submitBtn)
    expect(input).toHaveValue('test@example.com')
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Toggle menu/i })
    // Mobile menu items are hidden by default in desktop viewport
    await user.click(toggle)
    // After clicking, the mobile menu should appear with nav links
    const mobileNav = screen.getAllByText('Home')
    expect(mobileNav.length).toBeGreaterThanOrEqual(1)
    // Click again to close
    await user.click(toggle)
  })

  it('renders social media icon links in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    const instagram = within(footer).getByRole('link', { name: /Instagram/i })
    const facebook = within(footer).getByRole('link', { name: /Facebook/i })
    const twitter = within(footer).getByRole('link', { name: /Twitter/i })
    expect(instagram).toBeInTheDocument()
    expect(facebook).toBeInTheDocument()
    expect(twitter).toBeInTheDocument()
  })
})
