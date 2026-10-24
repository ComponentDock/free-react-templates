import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { menuToggle, navLeft, navRight, searchHeading, searchPlaceholder } from '../data'

describe('Header', () => {
  it('renders the split navigation, the centred wordmark and the search control', () => {
    render(<Header />)
    for (const link of [...navLeft, ...navRight]) {
      expect(screen.getAllByRole('link', { name: link.label })[0]).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: 'Stryve home' })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Secondary' })).toBeInTheDocument()
  })

  it('opens the search overlay and closes it with the close control', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    const dialog = screen.getByRole('dialog', { name: 'Site search' })
    expect(within(dialog).getByRole('heading', { level: 2, name: searchHeading })).toBeInTheDocument()
    expect(within(dialog).getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()

    await user.click(within(dialog).getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('dialog', { name: 'Site search' })).not.toBeInTheDocument()
  })

  it('closes the search overlay on Escape', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    expect(screen.getByRole('dialog', { name: 'Site search' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Site search' })).not.toBeInTheDocument()
  })

  it('keeps an empty submit open and dismisses the overlay on a real query', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    const dialog = screen.getByRole('dialog', { name: 'Site search' })

    await user.click(within(dialog).getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('dialog', { name: 'Site search' })).toBeInTheDocument()

    await user.type(within(dialog).getByLabelText('Search keywords'), 'pilates')
    await user.click(within(dialog).getByRole('button', { name: 'Search' }))
    expect(screen.queryByRole('dialog', { name: 'Site search' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu panel', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: menuToggle })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const panel = document.getElementById('mobile-menu')
    expect(panel).not.toBeNull()
    expect(within(panel as HTMLElement).getAllByRole('link')).toHaveLength(
      navLeft.length + navRight.length,
    )

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toBeNull()
  })

  it('closes the mobile panel after following one of its links', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuToggle }))
    const panel = document.getElementById('mobile-menu') as HTMLElement
    const link = within(panel).getAllByRole('link')[1] as HTMLElement
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(link)
    expect(document.getElementById('mobile-menu')).toBeNull()
  })
})
