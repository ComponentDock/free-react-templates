import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'
import { domainPrices, domainSection } from '../data'

describe('DomainSearch', () => {
  it('shows the heading, sub-line, pill form, and six extension prices', () => {
    const { container } = render(<DomainSearch />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /Find Your Perfect Domain Name/,
    )
    expect(screen.getByText(domainSection.sub)).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: domainSection.searchLabel })).toBeInTheDocument()
    expect(container.querySelector('form')).toBeInTheDocument()
    const priceList = container.querySelector('section > div > div:last-child')!
    for (const price of domainPrices) {
      expect(within(priceList as HTMLElement).getByText(price.extension)).toBeInTheDocument()
      expect(within(priceList as HTMLElement).getByText(price.price)).toBeInTheDocument()
    }
  })

  it('shows a validation message for an empty domain and blocks navigation', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.click(screen.getByRole('button', { name: domainSection.searchLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(domainSection.emptyDomainMessage)
  })

  it('shows a validation message for an invalid domain', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.type(screen.getByRole('searchbox'), 'not a domain!')
    await user.click(screen.getByRole('button', { name: domainSection.searchLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(domainSection.invalidDomainMessage)
  })

  it('accepts a valid domain and shows a success message with the chosen extension', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.type(screen.getByRole('searchbox'), 'example')
    await user.selectOptions(screen.getByRole('combobox'), '.NET')
    await user.click(screen.getByRole('button', { name: domainSection.searchLabel }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('example.net')
  })

  it('accepts a domain typed with its own extension', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.type(screen.getByRole('searchbox'), 'example.com')
    await user.click(screen.getByRole('button', { name: domainSection.searchLabel }))
    expect(screen.getByRole('status')).toHaveTextContent('example.com is available')
  })

  it('clears the error while typing after a failed submit', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    await user.click(screen.getByRole('button', { name: domainSection.searchLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.type(screen.getByRole('searchbox'), 'e')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
