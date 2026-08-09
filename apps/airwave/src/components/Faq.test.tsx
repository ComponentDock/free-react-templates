import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five questions', () => {
    render(<Faq />)

    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /How do I book a guest/ })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /How often are new episodes released/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Where can I listen to Airwave/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /How can my company sponsor/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Can I suggest a topic/ })).toBeInTheDocument()
  })

  it('toggles an answer open and closed, reflecting aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: /How do I book a guest/ })
    expect(first).toHaveAttribute('aria-expanded', 'true')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
  })

  it('keeps the first item open by default', () => {
    render(<Faq />)

    expect(screen.getByRole('button', { name: /How do I book a guest/ })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
