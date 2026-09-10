import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqStats } from './FaqStats'

describe('FaqStats', () => {
  it('renders all 4 stat cards and 3 FAQ items', () => {
    render(<FaqStats />)

    expect(screen.getByText('5962')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('2394')).toBeInTheDocument()
    expect(screen.getByText('New Projects')).toBeInTheDocument()
    expect(screen.getByText('1439')).toBeInTheDocument()
    expect(screen.getByText('Tickets Submitted')).toBeInTheDocument()
    expect(screen.getByText('933')).toBeInTheDocument()
    expect(screen.getByText('Cup of Coffee')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /What services do you offer/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /How long does a typical/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /What is your pricing/ })).toBeInTheDocument()
  })

  it('expands and collapses FAQ items on click', async () => {
    const user = userEvent.setup()
    render(<FaqStats />)

    // First item is open by default
    expect(screen.getByText(/We offer a wide range/)).toBeInTheDocument()

    // Click second item → opens second, closes first
    await user.click(screen.getByRole('button', { name: /How long does a typical/ }))
    expect(screen.getByText(/Project timelines vary/)).toBeInTheDocument()
    expect(screen.queryByText(/We offer a wide range/)).not.toBeInTheDocument()

    // Click second item again → closes second (none open)
    await user.click(screen.getByRole('button', { name: /How long does a typical/ }))
    expect(screen.queryByText(/Project timelines vary/)).not.toBeInTheDocument()
  })

  it('toggles the same FAQ item closed when clicked twice', async () => {
    const user = userEvent.setup()
    render(<FaqStats />)

    // First item is open by default; click it to close
    await user.click(screen.getByRole('button', { name: /What services do you offer/ }))
    expect(screen.queryByText(/We offer a wide range/)).not.toBeInTheDocument()
  })
})
