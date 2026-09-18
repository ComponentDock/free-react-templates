import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar with brand name', () => {
    render(<App />)
    expect(screen.getByText('Weft')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    // "About Us" appears in both sidebar nav and section heading
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const links = screen.getAllByText('Component Dock')
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles sidebar on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const hamburger = screen.getByLabelText('Open menu')
    await user.click(hamburger)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes sidebar when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Open menu'))
    const overlay = document.querySelector('.bg-black\\/50') as HTMLElement
    await user.click(overlay)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('changes filter when sidebar filter button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Click the Branding filter button in the sidebar (first button with that name)
    const brandButtons = screen.getAllByRole('button', { name: 'Branding' }) as HTMLElement[]
    await user.click(brandButtons[0]!)
    // After filter, branding items should still be present
    expect(screen.getAllByText('Brand Identity').length).toBeGreaterThanOrEqual(1)
  })
})
