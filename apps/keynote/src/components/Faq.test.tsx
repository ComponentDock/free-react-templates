import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all six questions', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: /Got Questions/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What's included in my ticket/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Is there a virtual attendance option/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Can I get a refund/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /What's the hackathon about/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Are meals included/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /How can I submit a talk or poster/i }),
    ).toBeInTheDocument()
  })

  it('expands and collapses answers on activation', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const refund = screen.getByRole('button', { name: /Can I get a refund/i })
    expect(refund).toHaveAttribute('aria-expanded', 'false')
    await user.click(refund)
    expect(refund).toHaveAttribute('aria-expanded', 'true')
    await user.click(refund)
    expect(refund).toHaveAttribute('aria-expanded', 'false')
  })

  it('reveals the answer text of an expanded question', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    await user.click(screen.getByRole('button', { name: /virtual attendance/i }))
    expect(screen.getByText(/Virtual Pass \(\$299\)/i)).toBeInTheDocument()
  })
})
