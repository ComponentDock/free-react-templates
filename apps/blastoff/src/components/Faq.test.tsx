import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('shows the heading and four questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const questions = [
      'How is Blastoff different from other platforms?',
      'Can I migrate an existing project?',
      'Which cloud providers do you support?',
      'Is there a free tier?',
    ]
    for (const question of questions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses an answer', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', {
      name: 'How is Blastoff different from other platforms?',
    })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    const firstPanel = screen.getByRole('region', {
      name: 'How is Blastoff different from other platforms?',
    })
    expect(firstPanel).toHaveClass('block')
    expect(firstPanel).toHaveTextContent(/combines CI\/CD, hosting, analytics/)

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(firstPanel).toHaveClass('hidden')
  })

  it('keeps a single answer open at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const third = screen.getByRole('button', { name: 'Which cloud providers do you support?' })
    await user.click(third)

    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'Which cloud providers do you support?' }),
    ).toHaveTextContent(/AWS, GCP and Cloudflare/)

    const first = screen.getByRole('button', {
      name: 'How is Blastoff different from other platforms?',
    })
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
