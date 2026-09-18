import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the FAQ heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument()
  })

  it('displays all 8 question buttons', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button', { expanded: false })
    expect(buttons).toHaveLength(8)
  })

  it('expands a question when clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstButton = screen.getByRole('button', { name: /What services does Finflow offer/i })
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(firstButton)
    await waitFor(() => {
      expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    })
    expect(screen.getByText(/comprehensive range of financial services/i)).toBeInTheDocument()
  })
})
