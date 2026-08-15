import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { componentDockName, componentDockUrl, footerAbout, footerColumns, siteName } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about widget and the four link columns', () => {
    render(<Footer />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    expect(screen.getByText(footerAbout)).toBeInTheDocument()
    for (const column of footerColumns) {
      const nav = screen.getByRole('navigation', { name: column.title })
      for (const link of column.links) {
        expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('renders the copyright bar with a Component Dock link and no ColorLib credit', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: componentDockName })
    expect(credit).toHaveAttribute('href', componentDockUrl)
    expect(credit).toHaveAttribute('target', '_blank')
    expect(
      screen.getByText(new RegExp(`Copyright © \\d{4} All rights reserved`)),
    ).toBeInTheDocument()
    const sourceCredit = new RegExp(['color', 'lib'].join(''), 'i')
    expect(screen.queryByText(sourceCredit)).not.toBeInTheDocument()
  })
})
