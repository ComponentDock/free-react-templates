import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { PortfolioSection } from './PortfolioSection'

describe('PortfolioSection', () => {
  it('renders filter buttons with All active by default and every item visible', () => {
    render(<PortfolioSection />)
    const allButton = screen.getByRole('button', { name: 'All' })
    expect(allButton).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Web' })).toHaveAttribute('aria-pressed', 'false')

    expect(screen.getAllByRole('img')).toHaveLength(8)
    expect(screen.getByAltText('Meridian Finance — corporate site')).toBeInTheDocument()
  })

  it('filters the grid when a category button is pressed', async () => {
    const user = userEvent.setup()
    render(<PortfolioSection />)

    await user.click(screen.getByRole('button', { name: 'Design' }))

    expect(screen.getByRole('button', { name: 'Design' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getByAltText('Cinder & Co — packaging design')).toBeInTheDocument()
    expect(screen.getByAltText('Northwind — app design')).toBeInTheDocument()
    expect(screen.queryByAltText('Meridian Finance — corporate site')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(8)
  })

  it('renders a lightbox hint on each portfolio item', () => {
    render(<PortfolioSection />)
    const item = screen.getByAltText('Meridian Finance — corporate site').closest('figure')!
    expect(item.querySelector('button')).toHaveAttribute(
      'aria-label',
      'View Meridian Finance — corporate site',
    )
  })
})
