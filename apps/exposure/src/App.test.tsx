import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Exposure landing page', () => {
  it('renders all nine sections in reference order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    expect(headings).toContain('HOW WE MAKE USER EXPERIENCES')
    expect(headings).toContain('Take a look at our achivment')
    expect(headings).toContain('Tourist Blog')
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the EXPOSURE wordmark and six nav links plus a Contact now button', () => {
    render(<App />)
    expect(screen.getAllByText('Exposure').length).toBeGreaterThanOrEqual(1)
    const nav = screen.getAllByRole('navigation')[0]!
    for (const label of ['Home', 'About', 'Gallery', 'Services', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Contact now' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero with eyebrow, headline and Watch Portfolio button', () => {
    render(<App />)
    expect(screen.getByText('Creative Photographey')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Photography Make us happy Take a shot.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Portfolio' })).toBeInTheDocument()
  })

  it('renders the about section with the email link and Dali quote', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'hire@exposure.example' })).toBeInTheDocument()
    expect(screen.getByText('SALVADOR DALI')).toBeInTheDocument()
  })

  it('renders the services, gallery, awards, testimonial and blog sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Creative Photography' })).toBeInTheDocument()
    expect(screen.getAllByText('The Last man').length).toBe(6)
    expect(screen.getAllByText('Behance award').length).toBe(6)
    expect(screen.getByText('Jessya Inn')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Addiction When Gambling Becomes' }).length).toBe(3)
  })

  it('renders the footer with link columns, social row and Component Dock credit', () => {
    render(<App />)
    for (const column of ['Navigation', 'Useful Links', 'Instagram Feed']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the hamburger toggler', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggler = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggler)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBe(2)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
