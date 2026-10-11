import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders the pill form with labelled controls and the TLD options', () => {
    render(<DomainSearch />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Register your domain now!')
    expect(screen.getByLabelText('Domain name')).toHaveAttribute('placeholder', 'ex: cloudhost')
    const ending = screen.getByLabelText('Domain ending')
    expect(ending.tagName).toBe('SELECT')
    for (const option of ['.com', '.net', '.org', '.us', '.in']) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Search/ })).toHaveAttribute('type', 'submit')
  })

  it('lists the five TLD prices and a closing blurb', () => {
    render(<DomainSearch />)
    for (const item of screen.getAllByRole('listitem')) {
      expect(item.textContent).toContain('$1.95')
    }
    expect(screen.getByText(/every hosting plan includes one free domain/)).toBeInTheDocument()
  })

  it('reports an available domain in the polite live region without navigating', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.type(screen.getByLabelText('Domain name'), 'cloudhost')

    const select = screen.getByLabelText('Domain ending')
    await user.selectOptions(select, '.org')
    await user.click(screen.getByRole('button', { name: /Search/ }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'cloudhost.org is available — we will reserve it with your plan.',
    )
  })

  it('rejects an empty or malformed domain with an inline error', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    const field = screen.getByLabelText('Domain name')

    await user.click(screen.getByRole('button', { name: /Search/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter a domain name such as mybrand')

    await user.type(field, '-not-a-domain-')
    await user.click(screen.getByRole('button', { name: /Search/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter a domain name such as mybrand')
  })

  it('clears a previous error once a valid domain is submitted', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.click(screen.getByRole('button', { name: /Search/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter a domain name')

    await user.type(screen.getByLabelText('Domain name'), 'harbor.dev')
    await user.click(screen.getByRole('button', { name: /Search/ }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'harbor.dev.com is available — we will reserve it with your plan.',
    )
  })
})
