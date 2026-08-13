import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the dark topbar strip with blurb text', () => {
    render(<Header />)
    expect(screen.getByText(/Powering industry with reliable energy solutions/)).toBeInTheDocument()
  })

  it('renders the brand, contact info boxes, and nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Dynamo' })).toBeInTheDocument()
    expect(screen.getByText('+546 990221 123')).toBeInTheDocument()
    expect(screen.getByText('hello@dynamo.com')).toBeInTheDocument()
    expect(screen.getByText(/Main Str, no 23/)).toBeInTheDocument()
    // Desktop + mobile navs render duplicate links
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'About us' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThan(0)
  })

  it('marks Home as the active link', () => {
    render(<Header />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home).toHaveAttribute('aria-current', 'page')
  })

  it('opens the Solutions dropdown with Elements', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const solutions = screen.getAllByRole('button', { name: 'Solutions' })[0]!
    await user.click(solutions)
    expect(await screen.findByRole('link', { name: 'Elements' })).toBeInTheDocument()
  })

  it('opens a full-screen search modal from the yellow search button and closes it', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(await screen.findByRole('searchbox', { name: 'Search' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(screen.queryByRole('searchbox', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('closes the search modal when the search form is submitted', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    const input = await screen.findByRole('searchbox', { name: 'Search' })
    await user.type(input, 'welding')
    await user.keyboard('{Enter}')
    expect(screen.queryByRole('searchbox', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('opens the Solutions dropdown inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    const mobileSolutions = screen.getAllByRole('button', { name: 'Solutions' }).at(-1)!
    await user.click(mobileSolutions)
    expect(screen.getAllByRole('link', { name: 'Elements' }).length).toBeGreaterThan(0)
  })

  it('expands a stacked mobile menu from the hamburger toggle and closes it on link click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileLink = screen.getAllByRole('link', { name: 'Blog' }).at(-1)!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
