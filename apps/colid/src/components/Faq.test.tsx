import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and the three questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    for (const question of [
      'Sedeiusmod tempor inccsetetur aliquatraiy?',
      'Tempor inccsetetur aliquatraiy?',
      'Lorem ipsum dolor amet, consectetur adipisicing?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses an answer when a question is pressed', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', {
      name: 'Sedeiusmod tempor inccsetetur aliquatraiy?',
    })
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Ut enim ad minim veniam/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Tempor inccsetetur aliquatraiy?' }))
    expect(screen.getByRole('button', { name: 'Tempor inccsetetur aliquatraiy?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(screen.getByRole('button', { name: 'Tempor inccsetetur aliquatraiy?' }))
    expect(screen.getByRole('button', { name: 'Tempor inccsetetur aliquatraiy?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
