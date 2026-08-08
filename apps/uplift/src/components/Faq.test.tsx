import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('shows the section heading and five questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const questions = [
      'Are my donations tax-deductible?',
      'How are my funds allocated?',
      'Can I volunteer remotely?',
      'Can I set up a recurring donation?',
      'Do you work internationally?',
    ]
    for (const question of questions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses an answer when its question is toggled', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Are my donations tax-deductible?' })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    const firstPanel = screen.getByRole('region', { name: 'Are my donations tax-deductible?' })
    expect(firstPanel).toHaveClass('block')
    expect(firstPanel).toHaveTextContent(/registered 501\(c\)\(3\)/)

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(firstPanel).toHaveClass('hidden')
  })

  it('keeps a single answer open at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const third = screen.getByRole('button', { name: 'Can I volunteer remotely?' })
    await user.click(third)

    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: 'Can I volunteer remotely?' })).toHaveTextContent(
      /virtual volunteering opportunities/,
    )

    const first = screen.getByRole('button', { name: 'Are my donations tax-deductible?' })
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
