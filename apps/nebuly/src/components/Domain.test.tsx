import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Domain } from './Domain'

describe('Domain', () => {
  it('renders the heading, subtext, domain input, TLD pills, and price rows', () => {
    render(<Domain />)
    expect(screen.getByRole('heading', { name: 'Search Your Domain Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /domain name/i })).toBeInTheDocument()
    for (const tld of ['.com', '.net', '.biz', '.co', '.me']) {
      expect(screen.getByRole('button', { name: tld })).toBeInTheDocument()
    }
    expect(screen.getByText('$9.75')).toBeInTheDocument()
    expect(screen.getByText('$9.50')).toBeInTheDocument()
    expect(screen.getByText('$8.95')).toBeInTheDocument()
    expect(screen.getByText('$7.80')).toBeInTheDocument()
    expect(screen.getByText('$7.95')).toBeInTheDocument()
  })

  it('selecting a TLD pill marks it active', () => {
    render(<Domain />)
    const net = screen.getByRole('button', { name: '.net' })
    fireEvent.click(net)
    expect(net).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '.com' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('shows a success message for a valid domain', () => {
    render(<Domain />)
    fireEvent.change(screen.getByRole('textbox', { name: /domain name/i }), {
      target: { value: 'nebuly' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByText(/nebuly\.com is available/i)).toBeInTheDocument()
  })

  it('rejects an invalid domain and does not submit', () => {
    render(<Domain />)
    fireEvent.change(screen.getByRole('textbox', { name: /domain name/i }), {
      target: { value: 'not a domain!' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByText(/valid domain name/i)).toBeInTheDocument()
    expect(screen.queryByText(/is available/i)).not.toBeInTheDocument()
  })

  it('rejects an empty submit', () => {
    render(<Domain />)
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByText(/valid domain name/i)).toBeInTheDocument()
    expect(screen.queryByText(/is available/i)).not.toBeInTheDocument()
  })

  it('clears the error and the success message once the user types again', () => {
    render(<Domain />)
    const input = screen.getByRole('textbox', { name: /domain name/i })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByText(/valid domain name/i)).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'neb' } })
    expect(screen.queryByText(/valid domain name/i)).not.toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'nebuly' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByText(/nebuly\.com is available/i)).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'nebuly2' } })
    expect(screen.queryByText(/is available/i)).not.toBeInTheDocument()
  })

  it('uses the selected TLD in the availability message', () => {
    render(<Domain />)
    fireEvent.click(screen.getByRole('button', { name: '.me' }))
    fireEvent.change(screen.getByRole('textbox', { name: /domain name/i }), {
      target: { value: 'nebuly' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByText(/nebuly\.me is available/i)).toBeInTheDocument()
  })

  it('renders each price row next to its TLD pill', () => {
    const { container } = render(<Domain />)
    const rows = [...container.querySelectorAll('div')].filter((node) =>
      node.className.includes('flex justify-between'),
    )
    expect(rows).toHaveLength(5)
    expect(within(rows[0]!).getByText('.com')).toBeInTheDocument()
    expect(within(rows[0]!).getByText('$9.75')).toBeInTheDocument()
  })
})
