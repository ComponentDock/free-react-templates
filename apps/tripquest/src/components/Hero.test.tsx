import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, uppercase headline, blurb and yellow CTA over the photo', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText('Away from monotonous life')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Magical Travel')
    expect(heading).toHaveClass('uppercase')

    const cta = screen.getByRole('link', { name: 'Get Started' })
    expect(cta).toHaveAttribute('href', '#packages')
    expect(cta.className).toContain('bg-brand')

    expect(container.querySelector('#home')).not.toBeNull()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/tripquest-hero/1920/1080',
    )
    expect(container.querySelector('.overlay-navy')).not.toBeNull()
  })

  it('starts on the Flights tab and switches the form between the three tabs', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const flights = screen.getByRole('tab', { name: 'Flights' })
    const hotels = screen.getByRole('tab', { name: 'Hotels' })
    const holidays = screen.getByRole('tab', { name: 'Holidays' })
    expect(flights).toHaveAttribute('aria-selected', 'true')
    expect(hotels).toHaveAttribute('aria-selected', 'false')

    for (const label of ['From', 'To', 'Start', 'Return', 'Adults', 'Child']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Search flights' })).toBeInTheDocument()

    await user.click(hotels)
    expect(hotels).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('button', { name: 'Search Hotels' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Search flights' })).toBeNull()

    await user.click(holidays)
    expect(screen.getByRole('button', { name: 'Search Holidays' })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'holiday-panel')
  })

  it('confirms the booking request once the tab form is submitted', () => {
    render(<Hero />)

    expect(screen.queryByRole('status')).toBeNull()
    fireEvent.submit(screen.getByRole('button', { name: 'Search flights' }).closest('form')!)
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — a planner will email your options shortly.',
    )
  })
})
