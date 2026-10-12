import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders the heading, supporting copy and the labelled search bar', () => {
    render(<DomainSearch />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Search new domain')
    expect(screen.getByText(/Type the name you want and we will check it/)).toBeInTheDocument()
    expect(screen.getByLabelText('Domain name')).toHaveAttribute('placeholder', 'ex: yourbrand')
    expect(screen.getByRole('button', { name: 'Search domain' })).toHaveAttribute('type', 'submit')
  })

  it('lists the four TLD prices in order', () => {
    render(<DomainSearch />)
    const prices = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(prices).toEqual(['.com $15.99', '.net $10.99', '.org $10.99', '.me $10.99'])
  })

  it('announces an available domain in the polite status region', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.type(screen.getByLabelText('Domain name'), 'yourbrand')
    await user.click(screen.getByRole('button', { name: 'Search domain' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'yourbrand is available — add it to any plan at checkout.',
    )
  })

  it('rejects an empty and a malformed name with an inline error', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    const field = screen.getByLabelText('Domain name')

    await user.click(screen.getByRole('button', { name: 'Search domain' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Enter a domain name such as yourbrand or yourbrand.com',
    )

    await user.type(field, '-not-a-domain-')
    await user.click(screen.getByRole('button', { name: 'Search domain' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Enter a domain name such as yourbrand or yourbrand.com',
    )
  })

  it('clears the previous error once a valid name is submitted', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.click(screen.getByRole('button', { name: 'Search domain' }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter a domain name')

    await user.type(screen.getByLabelText('Domain name'), 'ecohive')
    await user.click(screen.getByRole('button', { name: 'Search domain' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'ecohive is available — add it to any plan at checkout.',
    )
  })
})
