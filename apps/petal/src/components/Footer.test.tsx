import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { creditLine, creditPrefix, footerColumns } from '../data'

describe('Footer', () => {
  it('renders every link column with its heading and links', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      const nav = screen.getByRole('navigation', { name: column.heading })
      expect(within(nav).getByRole('heading', { name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(within(nav).getByRole('link', { name: link.label })).toBeInTheDocument()
      }
    }
  })

  it('renders the social links and copyright lines', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByText(creditPrefix)).toBeInTheDocument()
    expect(screen.getByText(creditLine)).toBeInTheDocument()
  })
})
