import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footerNav } from '../data'

describe('Footer', () => {
  it('renders the about blurb, newsletter form and navigation columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /^Emblem\.$/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    for (const column of footerNav) {
      expect(screen.getByRole('navigation', { name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
      }
    }
  })

  it('links out to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects an invalid email with inline validation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send newsletter signup' }))
    expect(screen.getByRole('alert')).toHaveTextContent('valid email')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('accepts a valid email and swaps to the success message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Send newsletter signup' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('clears the error when typing resumes', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'bad')
    await user.click(screen.getByRole('button', { name: 'Send newsletter signup' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.clear(screen.getByLabelText('Email address'))
    await user.type(screen.getByLabelText('Email address'), 'ok@example.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
