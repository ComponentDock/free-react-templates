import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page background with a centered "Accordion #04" heading', () => {
    const { container } = render(<App />)
    expect(container.firstElementChild?.className).toContain('bg-page')
    const heading = screen.getByRole('heading', { level: 2, name: 'Accordion #04' })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('text-[28px]')
  })

  it('composes the reference section order: heading, card, panels, footer', () => {
    const { container } = render(<App />)
    const labels = Array.from(container.querySelectorAll('h2, button, footer a')).map((el) =>
      el.textContent?.trim(),
    )
    expect(labels).toEqual([
      'Accordion #04',
      'My Files349',
      'Mail89',
      'Cloud102',
      'More templates at Component Dock',
    ])
  })

  it('shows My Files open by default and Mail/Cloud closed', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /My Files/ })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('button', { name: /Mail/ })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: /Cloud/ })).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens Mail on click and closes My Files (single-open)', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Mail/ }))
    expect(screen.getByRole('region', { name: /Mail/ })).toBeInTheDocument()
    expect(screen.queryByRole('region', { name: /My Files/ })).not.toBeInTheDocument()
  })

  it('renders My Files service rows when open', () => {
    render(<App />)
    expect(screen.getByText('Dropbox')).toBeInTheDocument()
    expect(screen.getByText('Skydrive')).toBeInTheDocument()
    expect(screen.getByText('FTP Server')).toBeInTheDocument()
  })

  it('renders the footer with the Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the white card with correct shadow and border-radius', () => {
    const { container } = render(<App />)
    const card = container.querySelector('.rounded-\\[5px\\]')
    expect(card).toBeInTheDocument()
    expect(card?.className).toContain('bg-white')
    expect(card?.className).toContain('shadow-')
  })

  it('has no chevron icons anywhere', () => {
    const { container } = render(<App />)
    const chevrons = container.querySelectorAll('[data-icon="chevron"]')
    expect(chevrons).toHaveLength(0)
  })
})
