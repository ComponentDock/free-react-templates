import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the heading and all question buttons', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What types of woodworking services/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /How long does a typical project/i }),
    ).toBeInTheDocument()
  })

  it('expands and collapses an answer', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const btn = screen.getByRole('button', { name: /Do you source sustainable materials/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/certified suppliers/i)).toBeInTheDocument()
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows only one answer at a time', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstBtn = screen.getByRole('button', { name: /What types of woodworking services/i })
    const secondBtn = screen.getByRole('button', { name: /How long does a typical project/i })
    await user.click(firstBtn)
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(secondBtn)
    expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
    expect(secondBtn).toHaveAttribute('aria-expanded', 'true')
  })
})
