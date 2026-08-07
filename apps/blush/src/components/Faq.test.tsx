import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and three accordion questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'An app for Each & Everyone' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /How do I get started\?/ })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Is Blush available on mobile\?/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Can I cancel anytime\?/ })).toBeInTheDocument()
  })

  it('expands an answer on click and collapses it on a second click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: /How do I get started\?/ })
    await user.click(question)

    expect(screen.getByText(/Download the app from the store of your choice/i)).toBeInTheDocument()

    await user.click(question)
    expect(
      screen.queryByText(/Download the app from the store of your choice/i),
    ).not.toBeInTheDocument()
  })
})
