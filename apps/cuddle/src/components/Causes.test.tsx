import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders section heading', () => {
    render(<Causes />)

    expect(screen.getByText('Our Causes')).toBeInTheDocument()
    expect(screen.getByText('Our Causes & Help Us')).toBeInTheDocument()
  })

  it('renders cause cards with titles', () => {
    render(<Causes />)

    expect(screen.getByText('Give Food to Homeless Children')).toBeInTheDocument()
    expect(screen.getByText('Medical Support for Poor Children')).toBeInTheDocument()
    expect(screen.getByText('Clean Water for Rural Villages')).toBeInTheDocument()
  })

  it('renders progress bars with aria attributes', () => {
    render(<Causes />)

    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars.length).toBeGreaterThanOrEqual(3)

    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '70')
    expect(progressBars[0]).toHaveAttribute('aria-label', '70% complete')
  })

  it('renders navigation arrows', () => {
    render(<Causes />)

    expect(screen.getByRole('button', { name: 'Previous cause' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next cause' })).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<Causes />)

    const dots = screen.getAllByRole('button', { name: /Go to slide \d+/ })
    expect(dots).toHaveLength(4)
  })

  it('navigates to next cause on next click', () => {
    render(<Causes />)

    fireEvent.click(screen.getByRole('button', { name: 'Next cause' }))

    expect(screen.getByText('Build Homes for Homeless Families')).toBeInTheDocument()
  })

  it('wraps around from last to first on next click', () => {
    render(<Causes />)

    // Click next enough times to wrap: 0->1->2->3 (maxIndex)
    fireEvent.click(screen.getByRole('button', { name: 'Next cause' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next cause' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next cause' }))
    // Now at maxIndex (3), next click should wrap to 0
    fireEvent.click(screen.getByRole('button', { name: 'Next cause' }))

    expect(screen.getByText('Give Food to Homeless Children')).toBeInTheDocument()
  })

  it('navigates to previous cause', () => {
    render(<Causes />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous cause' }))

    // Should wrap to last slide
    expect(screen.getByText('Daily Meals for Orphanage')).toBeInTheDocument()
  })

  it('navigates to previous cause from non-zero index', () => {
    render(<Causes />)

    // Go forward first so currentIndex > 0
    fireEvent.click(screen.getByRole('button', { name: 'Next cause' }))
    // Now go prev — should go back to index 0
    fireEvent.click(screen.getByRole('button', { name: 'Previous cause' }))

    expect(screen.getByText('Give Food to Homeless Children')).toBeInTheDocument()
  })

  it('navigates via pagination dots', () => {
    render(<Causes />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 4' }))

    expect(screen.getByText('Daily Meals for Orphanage')).toBeInTheDocument()
  })

  it('auto-advances every 5 seconds', () => {
    vi.useFakeTimers()
    render(<Causes />)

    expect(screen.getByText('Give Food to Homeless Children')).toBeInTheDocument()

    vi.advanceTimersByTime(5000)
    expect(screen.getByText('Build Homes for Homeless Families')).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('renders cause images', () => {
    render(<Causes />)

    const images = screen.getAllByAltText(/^Cause:/)
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders category badges', () => {
    render(<Causes />)

    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Medical Health')).toBeInTheDocument()
    expect(screen.getByText('Environment')).toBeInTheDocument()
  })

  it('renders raised and goal amounts', () => {
    render(<Causes />)

    expect(screen.getByText('$5,600')).toBeInTheDocument()
    expect(screen.getByText('$8,000')).toBeInTheDocument()
  })

  it('renders donate buttons with aria-labels', () => {
    render(<Causes />)

    const donateButtons = screen.getAllByRole('button', { name: /^Donate to/ })
    expect(donateButtons.length).toBeGreaterThanOrEqual(3)
  })

  it('has section with id causes', () => {
    const { container } = render(<Causes />)

    const section = container.querySelector('#causes')
    expect(section).toBeInTheDocument()
  })

  it('shows funded percentage text', () => {
    render(<Causes />)

    expect(screen.getByText('70% funded')).toBeInTheDocument()
    expect(screen.getByText('45% funded')).toBeInTheDocument()
  })
})
