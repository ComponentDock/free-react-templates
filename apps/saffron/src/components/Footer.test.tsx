import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { copyrightYear, creditLabel, creditUrl, footerNote, siteName } from '../data'

describe('Footer', () => {
  it('renders the copyright line with the current year', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(`${siteName} © ${copyrightYear}`)
    expect(footer).toHaveTextContent(footerNote)
  })

  it('credits Component Dock with a link to its marketplace', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: creditLabel })
    expect(credit).toHaveAttribute('href', creditUrl)
    expect(creditUrl).toBe('https://www.componentdock.com/')
  })

  it('renders five right-aligned social icon links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Vimeo', 'Pinterest']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(footer.querySelectorAll('ul')).toHaveLength(1)
  })
})
