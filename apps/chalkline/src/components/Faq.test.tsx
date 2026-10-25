import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { faqs } from '../data'

describe('Faq', () => {
  it('lists six questions, all collapsed', () => {
    render(<Faq />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(faqs.length)
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
    expect(screen.queryByText(faqs[0]!.answer)).not.toBeInTheDocument()
  })

  it('opens a row and reveals its answer', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: faqs[0]!.question })
    await user.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(faqs[0]!.answer)).toBeInTheDocument()
  })

  it('closes the same row when it is activated twice', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: faqs[1]!.question })
    await user.click(question)
    await user.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(faqs[1]!.answer)).not.toBeInTheDocument()
  })

  it('keeps rows independent — opening a second does not close the first', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: faqs[2]!.question }))
    await user.click(screen.getByRole('button', { name: faqs[3]!.question }))

    expect(screen.getByText(faqs[2]!.answer)).toBeInTheDocument()
    expect(screen.getByText(faqs[3]!.answer)).toBeInTheDocument()
  })

  it('points aria-controls at the panel it reveals', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: faqs[4]!.question })
    await user.click(question)

    const panel = document.getElementById(question.getAttribute('aria-controls')!)
    expect(panel).not.toBeNull()
    expect(within(panel!).getByText(faqs[4]!.answer)).toBeInTheDocument()
  })
})
