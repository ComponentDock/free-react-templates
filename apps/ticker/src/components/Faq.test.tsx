import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('shows the FAQ pill, the heading with the gold gradient span and the sub-heading', () => {
    render(<Faq />)

    expect(screen.getByText('FAQ')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Common Questions')

    const goldSpan = screen.getByText('Questions')
    expect(goldSpan).toHaveClass('bg-clip-text')
    expect(goldSpan).toHaveClass('text-transparent')
  })

  it('shows at least eight questions including the required ones', () => {
    render(<Faq />)

    expect(
      screen.getByRole('button', { name: 'Do I need any prior trading experience?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Do you guarantee profits or specific returns?' }),
    ).toBeInTheDocument()

    const buttons = screen.getAllByRole('button', { expanded: false })
    expect(buttons.length).toBeGreaterThanOrEqual(8)
  })

  it('expands an answer on click and collapses it on a second click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const trigger = screen.getByRole('button', { name: 'Do I need any prior trading experience?' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Our curriculum starts from absolute zero/)).toBeInTheDocument()

    const chevron = trigger.querySelector('svg')
    expect(chevron?.parentElement).toHaveClass('rotate-180')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Our curriculum starts from absolute zero/)).not.toBeInTheDocument()
  })
})
