import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainBand } from './DomainBand'

describe('DomainBand', () => {
  it('renders the domain search form with input, extension select, and Search button', () => {
    render(<DomainBand />)

    const input = screen.getByPlaceholderText('Enter your domain name...')
    expect(input).toBeInTheDocument()

    const select = screen.getByRole('combobox', { name: /domain extension/i })
    expect(select).toHaveValue('.com')
    expect(screen.getAllByRole('option').map((o) => o.textContent)).toEqual([
      '.com',
      '.net',
      '.biz',
      '.co',
      '.me',
    ])

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders the TLD price row', () => {
    render(<DomainBand />)

    for (const [tld, price] of [
      ['.com', '$9.75'],
      ['.net', '$9.50'],
      ['.biz', '$8.95'],
      ['.co', '$7.80'],
      ['.me', '$7.95'],
    ]) {
      expect(screen.getByText(`${tld} ${price}`)).toBeInTheDocument()
    }
  })

  it('submits the form without navigating', async () => {
    const user = userEvent.setup()
    render(<DomainBand />)

    const input = screen.getByPlaceholderText('Enter your domain name...')
    await user.type(input, 'mywebsite')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(input).toHaveValue('mywebsite')
  })
})
