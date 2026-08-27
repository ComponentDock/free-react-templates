// fallow-ignore-file unused-file
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page background with a centered "Accordion #18" heading', () => {
    const { container } = render(<App />)
    expect(container.firstElementChild?.className).toContain('bg-page')
    const heading = screen.getByRole('heading', { level: 2, name: 'Accordion #18' })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('text-[28px]')
  })

  it('composes the reference section order: heading, accordion panels, footer', () => {
    render(<App />)
    // Top-level h2 = main heading; buttons = panel toggles; footer a = dock link
    expect(screen.getAllByRole('heading', { level: 2 })[0]).toHaveTextContent('Accordion #18')
    expect(
      screen.getByRole('button', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'How to link your paypal and bank account?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows first panel open by default and others closed', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'How to download and register?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(
      screen.getByRole('button', { name: 'How to create your paypal account?' }),
    ).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.getByRole('button', { name: 'How to link your paypal and bank account?' }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens second panel on click and closes first (single-open)', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'How to create your paypal account?' }))
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
  })

  it('renders the footer with the Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows panel content inside the open body', () => {
    render(<App />)
    expect(screen.getByText(/Anim pariatur cliche reprehenderit/)).toBeInTheDocument()
  })
})
