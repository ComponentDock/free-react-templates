import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the two-tone DRAYAGE wordmark in a skewed orange block', () => {
    const { container } = render(<Header />)
    const logo = screen.getByRole('link', { name: 'Drayage home' })
    expect(logo).toBeInTheDocument()
    const block = logo.querySelector('span')
    expect(block?.className).toContain('-skew-x-[30deg]')
    expect(block?.className).toContain('bg-brand')
    expect(logo.textContent).toBe('Drayage')
    expect(container.querySelector('span span')?.className).toContain('skew-x-[30deg]')
  })

  it('renders all six nav links with HOME styled active in orange', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Home', 'Services', 'About', 'Pages', 'Blog', 'Contacts']) {
      expect(nav.textContent).toContain(label)
    }
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home.className).toContain('text-brand')
  })

  it('toggles the PAGES dropdown with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const button = screen.getByRole('button', { name: /Pages/ })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Services Details')).not.toBeInTheDocument()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    const dropdown = screen.getAllByRole('list')[0] as HTMLElement
    for (const item of ['About', 'Services Details', 'Blog Details']) {
      expect(within(dropdown).getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Services Details')).not.toBeInTheDocument()
  })

  it('toggles the search panel with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const button = screen.getByRole('button', { name: 'Toggle search' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })
})
