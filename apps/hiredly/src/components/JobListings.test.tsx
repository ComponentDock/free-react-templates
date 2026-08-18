import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JobListings } from './JobListings'

describe('JobListings', () => {
  it('renders the section heading and subtitle', () => {
    render(<JobListings />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Discover jobs for you')
    expect(screen.getByText(/browse 200\+ top jobs/i)).toBeInTheDocument()
  })

  it('lists all seven category tabs with the first one active', () => {
    render(<JobListings />)

    const tablist = screen.getByRole('tablist', { name: /job categories/i })
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(7)
    expect(tabs[0]).toHaveTextContent('All Categories')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[6]).toHaveTextContent('Marketing')
  })

  it('shows six job cards with chips, title, location, type, company, and time', () => {
    render(<JobListings />)

    const list = screen.getByRole('list', { name: /job cards/i })
    const cards = within(list).getAllByRole('listitem')
    expect(cards).toHaveLength(6)

    const firstCard = cards[0] as HTMLElement
    expect(within(firstCard).getByText('Creative & Art')).toBeInTheDocument()
    expect(
      within(firstCard).getByText('User Experience Designer — Employee Solutions'),
    ).toBeInTheDocument()
    expect(within(firstCard).getByText(/New York, USA/)).toBeInTheDocument()
    expect(within(firstCard).getByText(/Full Time/)).toBeInTheDocument()
    expect(within(firstCard).getByText('Globe Solution Ltd.')).toBeInTheDocument()
    expect(within(firstCard).getByText('2h ago')).toBeInTheDocument()
  })

  it('swaps the visible job cards when a category tab is clicked', async () => {
    render(<JobListings />)
    const user = userEvent.setup()

    const tablist = screen.getByRole('tablist', { name: /job categories/i })
    const medicalTab = within(tablist).getByRole('tab', { name: 'Medical' })
    await user.click(medicalTab)
    expect(medicalTab).toHaveAttribute('aria-selected', 'true')

    const list = screen.getByRole('list', { name: /job cards/i })
    expect(within(list).getByText('Medical Assistant')).toBeInTheDocument()
    expect(within(list).getByText('Registered Nurse')).toBeInTheDocument()
    expect(
      within(list).queryByText('User Experience Designer — Employee Solutions'),
    ).not.toBeInTheDocument()
  })

  it('highlights the active tab with the brand underline and cards with a hover border', () => {
    render(<JobListings />)

    const tablist = screen.getByRole('tablist', { name: /job categories/i })
    const active = within(tablist).getByRole('tab', { name: 'All Categories' })
    expect(active.className).toContain('border-brand')

    const list = screen.getByRole('list', { name: /job cards/i })
    const card = within(list).getAllByRole('listitem')[0] as HTMLElement
    expect(card.className).toContain('hover:border-brand')
  })
})
