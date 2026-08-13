import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five questions with the first one expanded', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Frequently Ask Question/ }),
    ).toBeInTheDocument()

    const questions = [
      'Is WordPress hosting worth it?',
      'What are the advantages of WordPress hosting over shared?',
      'Will you transfer my site?',
      'Why should I host with Sitewise?',
      'How do I get started with Shared Hosting?',
    ]
    for (const question of questions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: questions[0] })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText(/managed WordPress plans handle updates/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: questions[1] })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('collapses the open question and expands another on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: 'Is WordPress hosting worth it?' }))
    expect(screen.getByRole('button', { name: 'Is WordPress hosting worth it?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByText(/managed WordPress plans handle updates/i)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Will you transfer my site?' }))
    expect(screen.getByRole('button', { name: 'Will you transfer my site?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText(/our team migrates your site/i)).toBeInTheDocument()
  })
})
