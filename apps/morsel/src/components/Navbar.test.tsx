import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks, searchPlaceholder } from '../data'

describe('Navbar', () => {
  it('renders the site name, primary links and a search input', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Morsel' })).toHaveAttribute('href', '#home')
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      expect(primary).toHaveTextContent(link)
    }
    expect(screen.getByLabelText('Search', { selector: 'input' })).toHaveAttribute(
      'placeholder',
      searchPlaceholder,
    )
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})
