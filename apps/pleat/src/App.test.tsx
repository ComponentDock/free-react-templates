import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page background with a centered "Accordion #01" heading', () => {
    const { container } = render(<App />)
    expect(container.firstElementChild?.className).toContain('bg-page')
    const heading = screen.getByRole('heading', { level: 2, name: 'Accordion #01' })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('text-[28px]')
  })

  it('composes the reference section order: heading, card, intro, panels, footer', () => {
    const { container } = render(<App />)
    const labels = Array.from(container.querySelectorAll('h2, h3, button, footer a')).map((el) =>
      el.textContent?.trim(),
    )
    expect(labels).toEqual([
      'Accordion #01',
      'Prices',
      'Spa Therapies',
      'Massage Therapies',
      'More templates at Component Dock',
    ])
  })

  it('shows Spa Therapies open by default and Massage Therapies closed', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Spa Therapies' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Massage Therapies' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens Massage Therapies on click and closes Spa Therapies (single-open)', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Massage Therapies' }))
    expect(screen.getByRole('region', { name: 'Massage Therapies' })).toBeInTheDocument()
    expect(screen.queryByRole('region', { name: 'Spa Therapies' })).not.toBeInTheDocument()
  })

  it('renders the intro paragraph inside the accordion card', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3, name: 'Prices' })).toBeInTheDocument()
    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the footer with the Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
