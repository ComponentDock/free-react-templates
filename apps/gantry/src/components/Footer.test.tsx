import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the four widget columns with the right links', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Gantry')).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Learn More' })).toBeInTheDocument()

    expect(within(footer).getByRole('heading', { name: 'Our Company' })).toBeInTheDocument()
    expect(
      within(footer)
        .getAllByRole('link')
        .filter((l) =>
          ['About', 'News', 'Services', 'Our Team', 'Careers', 'Projects'].includes(
            l.textContent ?? '',
          ),
        ),
    ).toHaveLength(6)

    expect(within(footer).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(
      within(footer)
        .getAllByRole('link')
        .filter((l) => ['Industrial', 'Construction', 'Remodeling'].includes(l.textContent ?? '')),
    ).toHaveLength(3)

    expect(within(footer).getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(
      within(footer)
        .getAllByRole('link')
        .filter((l) =>
          ['Help Center', 'Support Community', 'Press', 'FAQ', 'Our Partners'].includes(
            l.textContent ?? '',
          ),
        ),
    ).toHaveLength(5)
  })

  it('credits Component Dock as the only credit in the bottom bar', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: /Component Dock/ })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')

    const bottomBar = credit.closest('div')
    expect(bottomBar).not.toBeNull()
    expect(within(bottomBar!).getAllByRole('link')).toHaveLength(1)
  })
})
