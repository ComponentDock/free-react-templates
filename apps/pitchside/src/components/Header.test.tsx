import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the wordmark and desktop nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Pitchside/i })).toBeInTheDocument()
    for (const label of ['Home', 'Club', 'Schedule', 'Results', 'Contact Us']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the Sport dropdown panel', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const sportButton = screen.getByRole('button', { name: 'Sport' })

    expect(sportButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(sportButton)
    expect(sportButton).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByText('Tennis').closest('ul')!
    expect(panel).toHaveClass('opacity-100')

    await user.click(sportButton)
    expect(sportButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('Tennis').closest('ul')).toHaveClass('opacity-0')
  })

  it('shows the Pages dropdown links in a white panel and closes it again', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pagesButton = screen.getByRole('button', { name: 'Pages' })
    await user.click(pagesButton)
    const panel = screen.getByText('Blog').closest('ul')!
    expect(panel).toHaveClass('bg-white')
    expect(within(panel).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('Blog').closest('ul')).toHaveClass('opacity-0')
  })

  it('toggles the search affordance', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const searchButton = screen.getByRole('button', { name: 'Search' })

    expect(searchButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(searchButton)
    expect(searchButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('searchbox')).toBeInTheDocument()

    await user.click(searchButton)
    expect(searchButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-menu')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })

  it('closes the mobile menu after choosing a link', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    const mobileClub = screen.getAllByRole('link', { name: 'Club' })[1]!
    mobileClub.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileClub)

    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })
})
