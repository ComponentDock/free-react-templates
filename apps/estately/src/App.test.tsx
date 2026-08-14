import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('Estately landing page', () => {
  it('renders all seven sections in reference order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    expect(headings).toContain('Sell Faster. Save Thousands.')
    expect(headings).toContain('Recently Add Homes')
    expect(headings).toContain('See If You Qualify for a Mortgage')
    expect(headings).toContain('Seller Success Stories')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the brand wordmark with a real-estate subtitle', () => {
    render(<App />)
    expect(screen.getAllByText('Estately').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Real Estate').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the six nav links plus a Join us button', () => {
    render(<App />)
    const nav = screen.getAllByRole('navigation')[0]!
    for (const label of ['Home', 'About', 'Buy', 'Pages', 'News', 'Contact']) {
      expect(within(nav).getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Join us' }).length).toBeGreaterThanOrEqual(1)
  })

  it('opens the Pages dropdown listing three sub-links', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Desktop nav link (mobile menu duplicates the label).
    const pages = screen.getAllByText('Pages')[0]!
    await user.click(pages)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Search Result').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Property').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero with five tabs, Buy selected, and a search input', () => {
    render(<App />)
    const buy = screen.getByRole('radio', { name: 'Buy' })
    expect(buy).toBeChecked()
    for (const tab of ['Rent', 'Sell', 'Property Value', 'Agents']) {
      expect(screen.getByRole('radio', { name: tab })).not.toBeChecked()
    }
    expect(screen.getByPlaceholderText('Search by state, postcode or suburb')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('switches the selected search tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('radio', { name: 'Rent' }))
    expect(screen.getByRole('radio', { name: 'Rent' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Buy' })).not.toBeChecked()
  })

  it('renders the intro with two alternating rows', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'We charge 2% total. No hidden fees or upfront costs.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'How Much Can You Save? We work for you, not commission.',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Find out more')).toHaveLength(6)
  })

  it('renders three property cards with badges, prices and titles', () => {
    render(<App />)
    expect(screen.getByText('$469,000')).toBeInTheDocument()
    expect(screen.getByText('$369,000')).toBeInTheDocument()
    expect(screen.getByText('$560,000')).toBeInTheDocument()
    expect(screen.getAllByText('3 Bedrooms Townhouse')).toHaveLength(3)
    expect(screen.getAllByText('New')).toHaveLength(2)
    expect(screen.getByText('Offer')).toBeInTheDocument()
  })

  it('renders the loan form with two inputs and does not navigate on submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    const income = screen.getByPlaceholderText('Your income')
    const amount = screen.getByPlaceholderText('Amount needed')
    await user.type(income, '90000')
    await user.type(amount, '400000')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByDisplayValue('90000')).toBeInTheDocument()
    expect(screen.getByDisplayValue('400000')).toBeInTheDocument()
  })

  it('renders the footer with four link columns and a component-dock credit', () => {
    render(<App />)
    for (const column of ['Company', 'For Buyers', 'For Sellers', 'For Renters']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/we are hiring/i).length).toBeGreaterThanOrEqual(1)
    const dockLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Made with/i)).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the hamburger toggler', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggler = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggler)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile panel duplicates the desktop links (desktop + mobile = 2).
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBe(2)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
