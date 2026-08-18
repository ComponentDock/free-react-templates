import { fireEvent, render, screen } from '@testing-library/react'
import { Faq } from './Faq'
import { FAQ_ITEMS } from '../data'
import { describe, expect, it } from 'vitest'

describe('Faq', () => {
  it('renders the heading and all three questions', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/ })).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(FAQ_ITEMS.length)
    for (const item of FAQ_ITEMS) {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    }
  })

  it('opens the first item by default with the active styling', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQ_ITEMS[0]!.question })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first.className).toContain('bg-brand-tint')
    expect(screen.getByText(FAQ_ITEMS[0]!.answer)).toBeInTheDocument()
    for (let i = 1; i < FAQ_ITEMS.length; i++) {
      expect(screen.queryByText(FAQ_ITEMS[i]!.answer)).not.toBeInTheDocument()
    }
  })

  it('switches the open item on activation and toggles closed on re-activation', () => {
    render(<Faq />)
    const second = screen.getByRole('button', { name: FAQ_ITEMS[1]!.question })
    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(FAQ_ITEMS[1]!.answer)).toBeInTheDocument()
    expect(screen.queryByText(FAQ_ITEMS[0]!.answer)).not.toBeInTheDocument()

    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(FAQ_ITEMS[1]!.answer)).not.toBeInTheDocument()
  })
})
