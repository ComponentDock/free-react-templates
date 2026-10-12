import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders the white field, the violet TLD chip and the mint action', () => {
    render(<DomainSearch />)

    const field = screen.getByLabelText('Domain name')
    expect(field).toHaveAttribute('placeholder', 'yourdomain')
    expect(field).toHaveClass('h-[60px]', 'bg-surface', 'rounded-[12px]', 'pl-[30px]')
    expect(field).toHaveAttribute('aria-invalid', 'false')

    expect(screen.getByLabelText('Top-level domain')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toHaveClass('bg-mint', 'h-[60px]')
  })

  it('asks for a domain name instead of navigating when the field is empty', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    await user.click(screen.getByRole('button', { name: 'Search' }))

    const error = screen.getByRole('alert')
    expect(error).toHaveTextContent('Type the domain you have in mind first.')
    expect(error).toHaveAttribute('id', 'domain-error')
    expect(screen.getByLabelText('Domain name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Domain name')).toHaveAttribute('aria-describedby', 'domain-error')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms an available domain in a polite live region without leaving the page', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    await user.type(screen.getByLabelText('Domain name'), '  skyvault  ')
    await user.selectOptions(screen.getByLabelText('Top-level domain'), '.net')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'skyvault.net looks free — we will e-mail you the next steps.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Domain name')).toHaveAttribute('aria-invalid', 'false')
  })

  it('clears an earlier error once a valid search is submitted', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Domain name'), 'vaulted')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('vaulted.io looks free')
  })
})
