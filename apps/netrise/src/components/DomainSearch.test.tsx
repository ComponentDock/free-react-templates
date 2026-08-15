import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'
import { tldPrices, tlds } from '../data'

describe('DomainSearch', () => {
  it('renders the heading, input, TLD select and TLD price row', () => {
    render(<DomainSearch />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Search You Domain Name' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Domain name' })).toBeInTheDocument()
    const select = screen.getByRole('combobox', { name: 'Top level domain' })
    expect(select).toHaveValue(tlds[0])
    for (const tld of tlds) {
      expect(screen.getByRole('option', { name: tld })).toBeInTheDocument()
    }
    for (const { tld, price } of tldPrices) {
      expect(screen.getAllByText(price).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(tld).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('button', { name: /Search Domain/ })).toBeInTheDocument()
  })

  it('shows a success message with the entered domain and selected TLD', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.type(screen.getByRole('textbox', { name: 'Domain name' }), '  mydomain  ')
    await user.selectOptions(screen.getByRole('combobox', { name: 'Top level domain' }), '.net')
    await user.click(screen.getByRole('button', { name: /Search Domain/ }))
    expect(screen.getByRole('status')).toHaveTextContent('mydomain.net is available')
  })

  it('shows a prompt when the domain is empty', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.click(screen.getByRole('button', { name: /Search Domain/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Please enter a domain name')
  })
})
