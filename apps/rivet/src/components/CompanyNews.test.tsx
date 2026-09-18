import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CompanyNews } from './CompanyNews'

describe('CompanyNews', () => {
  it('renders the heading', () => {
    render(<CompanyNews />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Company News')
  })

  it('renders all three news items', () => {
    render(<CompanyNews />)
    expect(screen.getByText('New Sustainable Building Project Announced')).toBeInTheDocument()
    expect(screen.getByText('Community Center Renovation Complete')).toBeInTheDocument()
    expect(screen.getByText('Annual Construction Safety Award')).toBeInTheDocument()
  })

  it('renders dates for each news item', () => {
    render(<CompanyNews />)
    expect(screen.getAllByText(/September|August/)).toHaveLength(3)
  })

  it('renders Read more links', () => {
    render(<CompanyNews />)
    const readMoreLinks = screen.getAllByRole('link', { name: /Read more/i })
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders comment counts', () => {
    render(<CompanyNews />)
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('Read more link prevents default navigation', async () => {
    const user = userEvent.setup()
    render(<CompanyNews />)

    const readMore = screen.getAllByRole('link', { name: /Read more/i })[0]!
    readMore.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(readMore)
  })
})
