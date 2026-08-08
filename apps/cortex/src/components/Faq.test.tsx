import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all four questions', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /What is an AI agent/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Which LLM providers does Cortex support/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /How does pricing work/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /deploy agents in my own infrastructure/i }),
    ).toBeInTheDocument()
  })

  it('expands and collapses answers on activation', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const pricing = screen.getByRole('button', { name: /How does pricing work/i })
    expect(pricing).toHaveAttribute('aria-expanded', 'false')
    await user.click(pricing)
    expect(pricing).toHaveAttribute('aria-expanded', 'true')
    await user.click(pricing)
    expect(pricing).toHaveAttribute('aria-expanded', 'false')
  })

  it('reveals the answer text of an expanded question', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    await user.click(
      screen.getByRole('button', { name: /Which LLM providers does Cortex support/i }),
    )
    expect(screen.getByText(/all major LLM providers/i)).toBeInTheDocument()
  })
})
