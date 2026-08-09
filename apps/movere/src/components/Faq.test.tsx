import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five question items', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    const buttons = screen.getAllByRole('button', { expanded: false })
    expect(buttons).toHaveLength(4)
    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })

  it('expands and collapses items on activation', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: /Are your movers licensed/ })
    const second = screen.getByRole('button', { name: /How far in advance/ })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/We recommend booking 1-2 weeks ahead/)).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
  })
})
