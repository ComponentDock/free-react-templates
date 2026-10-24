import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  creditHref,
  creditLabel,
  footerMenu,
  socials,
  subscribeCta,
  subscribeError,
  subscribeSuccess,
} from '../data'

describe('Footer', () => {
  it('renders the wordmark, six-link menu and five social links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: 'Stryve home' })).toHaveAttribute('href', '#top')

    for (const link of footerMenu) {
      expect(within(footer).getAllByRole('link', { name: link.label })[0]).toHaveAttribute(
        'href',
        link.href,
      )
    }

    const socialList = within(footer).getByRole('list', { name: 'Footer social links' })
    expect(within(socialList).getAllByRole('link')).toHaveLength(socials.length)
    expect(within(socialList).getByRole('link', { name: 'Youtube' })).toHaveAttribute(
      'href',
      'https://www.youtube.com/',
    )
  })

  it('rejects an empty or malformed address without confirming', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: subscribeCta }))
    expect(screen.getByRole('alert')).toHaveTextContent(subscribeError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeCta }))
    expect(screen.getByRole('alert')).toHaveTextContent(subscribeError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid address', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: subscribeCta }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribeSuccess)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'false')
  })

  it('credits Component Dock instead of any external attribution', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: creditLabel })
    expect(credit).toHaveAttribute('href', creditHref)
    expect(credit.closest('footer')).not.toBeNull()
  })
})
