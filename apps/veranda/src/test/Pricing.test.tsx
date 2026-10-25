import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from '../components/Pricing'

describe('Pricing', () => {
  it('opens on the monthly prices with three billing notes', () => {
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Toggle annual billing' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)

    expect(screen.getByText('Reader')).toBeInTheDocument()
    expect(screen.getByText('Member')).toBeInTheDocument()
    expect(screen.getByText('Patron')).toBeInTheDocument()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Start reading' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Become a patron' })).toBeInTheDocument()
  })

  it('strikes the two features the free tier withholds', () => {
    render(<Pricing />)

    expect(screen.getByText('Post and reply in channels')).toHaveClass('line-through')
    expect(screen.getByText('Member directory')).toHaveClass('line-through')
    expect(screen.getByText('Read every channel and thread')).not.toHaveClass('line-through')
  })

  it('rewrites every price and note when annual billing is chosen', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Toggle annual billing' })
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('$90')).toBeInTheDocument()
    expect(screen.getByText('$290')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($90/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($290/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($0/year)')).toBeInTheDocument()
    expect(screen.queryByText('Billed monthly')).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByText('$9')).toBeInTheDocument()
  })
})
