import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three link columns with five links each', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveClass('from-violet-deep', 'to-violet')

    for (const column of ['Company', 'Products', 'Support'] as const) {
      const nav = screen.getByRole('navigation', { name: column })
      expect(within(nav).getAllByRole('link')).toHaveLength(5)
      expect(within(nav).getByRole('heading', { level: 4, name: column })).toHaveClass(
        'text-footer-link',
      )
    }

    expect(screen.getByRole('link', { name: 'Why choose us' })).toHaveClass('hover:pl-[5px]')
    expect(screen.getByRole('link', { name: 'Cloud hosting' })).toHaveAttribute('href', '#pricing')
    expect(screen.queryByRole('link', { name: 'Help center' })).not.toBeInTheDocument()
  })

  it('renders the wordmark, round social links and the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText('Presto')).toBeInTheDocument()

    for (const label of ['X', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toHaveClass(
        'rounded-full',
        'border-white',
        'h-10',
      )
    }

    expect(screen.getByText(/Copyright © 2026 Presto/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects an invalid e-mail address with an inline message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('E-mail address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Enter a valid e-mail address to subscribe.',
    )
    expect(screen.getByLabelText('E-mail address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a valid subscription in the live region without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('E-mail address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks — we will keep ada@example.com')
    expect(screen.getByLabelText('E-mail address')).toHaveAttribute('aria-invalid', 'false')
    expect(window.location.hash).toBe('')
  })
})
