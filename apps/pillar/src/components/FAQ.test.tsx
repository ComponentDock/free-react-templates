import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the FAQ heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: 'Frequently Ask Questions' })).toBeInTheDocument()
  })

  it('shows the first question expanded by default', () => {
    render(<FAQ />)
    expect(screen.getByRole('button', { name: /How much do you charge/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('toggles questions open and closed', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const secondBtn = screen.getByRole('button', { name: /What is your process/i })
    expect(secondBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(secondBtn)
    expect(secondBtn).toHaveAttribute('aria-expanded', 'true')

    await user.click(secondBtn)
    expect(secondBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders all five questions', () => {
    render(<FAQ />)
    expect(screen.getByRole('button', { name: /How much do you charge/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /What is your process/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /How it works/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Is it free/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Where to find you/i })).toBeInTheDocument()
  })
})
