import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and the three questions with the first open by default', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()

    const buttons = screen.getAllByRole('button', { name: /Is it free|How to install|Where can/ })
    expect(buttons).toHaveLength(3)

    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')

    expect(screen.getByText(/Concierge is a free template/)).toBeInTheDocument()
  })

  it('expands another item and collapses the previously open one', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button', { name: /Is it free|How to install|Where can/ })

    fireEvent.click(buttons[1]!)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Download the source, run npm install/)).toBeInTheDocument()
    expect(screen.queryByText(/Concierge is a free template/)).toBeNull()

    fireEvent.click(buttons[2]!)
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Open an issue on the project repository/)).toBeInTheDocument()
  })

  it('collapses the open item when activated again', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button', { name: /Is it free|How to install|Where can/ })

    fireEvent.click(buttons[0]!)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Concierge is a free template/)).toBeNull()
  })

  it('applies the teal-on-tint treatment to the active item', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button', { name: /Is it free|How to install|Where can/ })
    expect(buttons[0]!.className).toContain('bg-brand-tint')
    expect(buttons[0]!.className).toContain('text-brand-deep')
    expect(buttons[1]!.className).not.toContain('bg-brand-tint')
  })
})
