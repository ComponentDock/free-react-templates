import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Frequently Asked Questions',
    )
  })

  it('renders all six questions', () => {
    render(<FAQ />)
    const questions = [
      'What is Spark?',
      'How do I get started?',
      'Is Spark free to use?',
      'Can I customize the design?',
      'Does it support dark mode?',
      'What technologies does Spark use?',
    ]
    for (const q of questions) {
      expect(screen.getByText(q)).toBeInTheDocument()
    }
  })

  it('expands an answer when a question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const question = screen.getByRole('button', { name: 'What is Spark?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/all-in-one app landing template/i)).toBeInTheDocument()
  })

  it('collapses an answer when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const question = screen.getByRole('button', { name: 'What is Spark?' })
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
  })

  it('collapses previous answer when another question is opened', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    await user.click(screen.getByRole('button', { name: 'What is Spark?' }))
    await user.click(screen.getByRole('button', { name: 'How do I get started?' }))

    expect(screen.getByRole('button', { name: 'What is Spark?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: 'How do I get started?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
