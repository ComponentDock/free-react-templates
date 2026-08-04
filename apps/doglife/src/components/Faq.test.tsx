import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

const questions = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptas.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'consectetur, adipisicing elit?',
] as const

describe('Faq', () => {
  it('shows the heading and lists the four questions', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Ask Questions' })).toBeInTheDocument()
    for (const question of questions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('reveals the answer when a question is activated and hides it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: questions[0] })
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Far far away, behind the word mountains/)).not.toBeInTheDocument()

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Far far away, behind the word mountains/)).not.toBeInTheDocument()
  })

  it('keeps questions independent: opening one does not open another', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: questions[0] })
    const second = screen.getByRole('button', { name: questions[1] })

    await user.click(first)
    await user.click(second)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
