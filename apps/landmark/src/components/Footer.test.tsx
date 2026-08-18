import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER_COLUMNS } from '../data'

describe('Footer', () => {
  it('renders the brand block with social icons and all four link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Landmark' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Linkedin' })).toBeInTheDocument()

    for (const column of FOOTER_COLUMNS) {
      const heading = screen.getByRole('heading', { name: column.title })
      const columnBody = within(heading.closest('div')!)
      for (const link of column.links) {
        expect(columnBody.getByText(link)).toBeInTheDocument()
      }
    }
  })

  it('links Contact Us items as text and other columns as links', () => {
    render(<Footer />)

    const contactColumn = FOOTER_COLUMNS.find((column) => column.title === 'Contact Us')!
    for (const item of contactColumn.links) {
      expect(screen.queryByRole('link', { name: item })).not.toBeInTheDocument()
      expect(screen.getByText(item)).toBeInTheDocument()
    }

    const navColumn = FOOTER_COLUMNS.find((column) => column.title === 'Navigation')!
    expect(screen.getByRole('link', { name: navColumn.links[0] })).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
    expect(dock).toHaveAttribute('rel', 'noreferrer')
  })
})
