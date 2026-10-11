import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FOOTER } from '../data/content'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with its social links', () => {
    render(<Footer />)
    expect(screen.getByText('tripforge')).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the link columns and the contact block from the reference', () => {
    render(<Footer />)
    for (const column of FOOTER.columns) {
      const heading = screen.getByRole('heading', { level: 2, name: column.title })
      const list = heading.nextElementSibling as HTMLElement
      for (const link of column.links) {
        expect(within(list).getByText(link)).toBeInTheDocument()
      }
    }
    expect(screen.getByRole('heading', { level: 2, name: FOOTER.contactTitle })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.address)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.phone)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.email)).toBeInTheDocument()
  })

  it('credits Component Dock instead of the original attribution', () => {
    const { container } = render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
    expect(container.querySelectorAll('a[href^="http"]')).toHaveLength(1)
  })
})
