import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  componentDockName,
  componentDockUrl,
  copyrightPrefix,
  footerAbout,
  footerColumns,
  socialLabel,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb and the three link columns', () => {
    render(<Footer />)
    expect(screen.getByText(footerAbout)).toBeInTheDocument()

    for (const column of footerColumns) {
      expect(screen.getByRole('navigation', { name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('credits Component Dock and renders social icons', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(copyrightPrefix))).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: componentDockName })
    expect(credit).toHaveAttribute('href', componentDockUrl)

    expect(screen.getByRole('link', { name: `${socialLabel}: Twitter` })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${socialLabel}: Facebook` })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${socialLabel}: Behance` })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${socialLabel}: Website` })).toBeInTheDocument()
  })
})
