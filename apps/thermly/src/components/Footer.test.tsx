import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { brand, footerColumns } from '../data'

describe('Footer', () => {
  it('renders the brand block, the trade details and the three link columns', () => {
    render(<Footer />)

    expect(screen.getByText(brand.tagline)).toBeInTheDocument()
    expect(screen.getByText(brand.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: brand.phone })).toHaveAttribute(
      'href',
      'tel:+15550200200',
    )
    expect(screen.getByRole('link', { name: brand.email })).toHaveAttribute(
      'href',
      `mailto:${brand.email}`,
    )

    for (const column of footerColumns) {
      const nav = screen.getByRole('navigation', { name: column.title })
      expect(nav).toBeInTheDocument()
      const labels = new Set(column.links.map((link) => link.label as string))
      expect(
        screen.getAllByRole('link').filter((link) => labels.has(link.textContent ?? '')),
      ).toHaveLength(labels.size)
    }
  })

  it('renders the three social links as real external targets', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', 'https://x.com/')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('confirms a valid newsletter address without leaving the page', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('You are on the list')
  })

  it('blocks an empty newsletter submit', async () => {
    const user = userEvent.setup()
    const { container } = render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.submit(container.querySelector('form')!)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('credits the marketplace in the legal bar', () => {
    render(<Footer />)

    expect(screen.getByText(brand.copyright)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
