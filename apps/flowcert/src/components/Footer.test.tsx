import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { brand, footerColumns, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the brand block with three social tiles, address, phone and email', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Flowcert home' })).toHaveAttribute('href', '#top')
    expect(screen.getByText(brand.tagline)).toBeInTheDocument()
    expect(screen.getByText(brand.address)).toBeInTheDocument()

    for (const social of socialLinks) {
      const tile = screen.getByRole('link', { name: social.label })
      expect(tile).toHaveAttribute('href', social.href)
      expect(tile).toHaveAttribute('rel', 'noreferrer')
    }

    expect(screen.getByRole('link', { name: brand.phone })).toHaveAttribute(
      'href',
      brand.phoneHref,
    )
    expect(screen.getByRole('link', { name: brand.email })).toHaveAttribute(
      'href',
      `mailto:${brand.email}`,
    )
  })

  it('renders the three link columns with four, four and three links', () => {
    render(<Footer />)

    for (const column of footerColumns) {
      const nav = screen.getByRole('navigation', { name: column.title })
      const links = within(nav).getAllByRole('link')
      expect(links).toHaveLength(column.links.length)
      expect(links.map((link) => link.textContent)).toEqual(column.links.map((link) => link.label))
    }
  })

  it('blocks an empty newsletter submit and confirms a valid address', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    // A programmatic submit bypasses the browser's own block, so the guard must hold.
    fireEvent.submit(screen.getByLabelText('Email address').closest('form')!)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), 'dana@flowcert.example')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('You are on the list')
  })

  it('credits Component Dock in the legal bar next to the copyright and policy links', () => {
    render(<Footer />)

    expect(screen.getByText(brand.copyright)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(credit.closest('p')).toHaveTextContent('More templates at Component Dock')
  })
})
