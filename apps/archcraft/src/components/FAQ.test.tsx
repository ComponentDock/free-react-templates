import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders heading and 5 questions', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: 'Frequently Ask Questions' })).toBeInTheDocument()
    expect(screen.getByText('How much do you charge for a building project?')).toBeInTheDocument()
    expect(screen.getByText('What is your design process?')).toBeInTheDocument()
    expect(screen.getByText('How long does a typical project take?')).toBeInTheDocument()
    expect(screen.getByText('Will you provide detailed plans?')).toBeInTheDocument()
    expect(screen.getByText('How can I get started with your services?')).toBeInTheDocument()
  })

  it('expands an answer when a question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const q1 = screen.getByText('How much do you charge for a building project?')
    expect(q1.closest('button')).toHaveAttribute('aria-expanded', 'false')

    await user.click(q1)
    expect(q1.closest('button')).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/pricing depends on the scope/)).toBeInTheDocument()
  })

  it('collapses answer when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const q1 = screen.getByText('How much do you charge for a building project?')
    await user.click(q1)
    expect(screen.getByText(/pricing depends on the scope/)).toBeInTheDocument()

    await user.click(q1)
    expect(q1.closest('button')).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/pricing depends on the scope/)).not.toBeInTheDocument()
  })
})
