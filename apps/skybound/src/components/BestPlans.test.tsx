import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { BestPlans } from './BestPlans'

describe('BestPlans', () => {
  it('renders the title block, CTA and three package cards with hover-reveal content', () => {
    render(<BestPlans />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Best Tour PlansRecently')
    expect(screen.getAllByText(/consectetur adipisicing elit|Nemo enim ipsam/)).toHaveLength(2)
    expect(screen.getByRole('link', { name: /Browse all Packages/i })).toHaveAttribute(
      'href',
      '#search',
    )
    expect(screen.getAllByRole('heading', { level: 4, name: 'Proper Guided Tour' })).toHaveLength(3)
    expect(screen.getAllByText('$56')).toHaveLength(3)
    expect(screen.getAllByText('/day')).toHaveLength(3)
    expect(screen.getAllByText('Santorini Island Dream Holiday and Fun package')).toHaveLength(3)
    expect(document.querySelectorAll('.package-overlay')).toHaveLength(3)
    expect(document.querySelectorAll('.package-content')).toHaveLength(3)
    expect(document.querySelectorAll('.package-card .fill-star')).toHaveLength(15)
  })

  it('advances the carousel with arrows and dots, clamping at the ends', () => {
    render(<BestPlans />)
    const carousel = screen.getByRole('region', { name: 'Package carousel' })
    const previous = screen.getByRole('button', { name: 'Previous package' })
    const next = screen.getByRole('button', { name: 'Next package' })
    expect(carousel).toHaveAttribute('data-index', '0')
    expect(previous).toBeDisabled()

    fireEvent.click(next)
    fireEvent.click(next)
    fireEvent.click(next)
    expect(carousel).toHaveAttribute('data-index', '2')
    expect(next).toBeDisabled()

    fireEvent.click(previous)
    expect(carousel).toHaveAttribute('data-index', '1')

    fireEvent.click(screen.getByRole('button', { name: 'Show package 3' }))
    expect(carousel).toHaveAttribute('data-index', '2')
    expect(screen.getByRole('button', { name: 'Show package 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('opens and closes the package photo lightbox from a pushpin', () => {
    render(<BestPlans />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'View Mykonos harbour at dusk photo' }))
    const dialog = screen.getByRole('dialog', { name: 'Package photo' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(within(dialog).getByRole('img', { name: 'Mykonos harbour at dusk' })).toBeInTheDocument()
    expect(
      within(dialog).getByRole('heading', { level: 4, name: 'Proper Guided Tour' }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close package photo' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
