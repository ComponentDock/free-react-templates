import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders the pill bar and the six-column price strip with per-column tints', () => {
    render(<DomainSearch />)

    expect(screen.getByLabelText('Domain name')).toHaveAttribute('placeholder', 'yourbrand')
    expect(screen.getByLabelText('Domain ending')).toHaveValue('.com')
    expect(screen.getByRole('button', { name: 'Search now' })).toHaveAttribute('type', 'submit')

    const strip = screen.getByText('$3.99 / year').closest('li')
    expect(strip).toHaveClass('border-r')
    expect(screen.getByText('.com', { selector: 'span' })).toHaveClass('text-tld-1')
    expect(screen.getByText('.io', { selector: 'span' })).toHaveClass('text-tld-4')
    expect(screen.getByText('.org', { selector: 'span' })).toHaveClass('text-tld-5')
    expect(screen.getByText('.live', { selector: 'span' })).toHaveClass('text-tld-5')
  })

  it('reports a friendly status for a valid name', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    await user.type(screen.getByLabelText('Domain name'), 'gridlines')
    await user.selectOptions(screen.getByLabelText('Domain ending'), '.io')
    await user.click(screen.getByRole('button', { name: 'Search now' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Checking gridlines.io — availability lands in your inbox in a moment.',
    )
  })

  it('blocks an empty name and a name that already carries an ending', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    await user.click(screen.getByRole('button', { name: 'Search now' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Enter a domain name to search — for example yourbrand.',
    )

    await user.clear(screen.getByLabelText('Domain name'))
    await user.type(screen.getByLabelText('Domain name'), 'gridlines.dev')
    await user.click(screen.getByRole('button', { name: 'Search now' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Search for the name only — the .com ending is already selected.',
    )
  })
})
