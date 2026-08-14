import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { cause } from '../data'
import { UpcomingCause } from './UpcomingCause'

describe('UpcomingCause', () => {
  it('renders the kicker, title, Target/Raised boxes, and Donate Now button', () => {
    render(<UpcomingCause />)

    expect(screen.getByText(cause.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: cause.title })).toBeInTheDocument()
    expect(screen.getByText('Target :')).toBeInTheDocument()
    expect(screen.getByText(cause.target)).toBeInTheDocument()
    expect(screen.getByText('Raised :')).toBeInTheDocument()
    expect(screen.getByText(cause.raised)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('renders the photo with a 60% progress bar and circular percentage badge', () => {
    const { container } = render(<UpcomingCause />)

    const progress = screen.getByRole('progressbar', { name: 'Cause funding progress' })
    expect(progress).toHaveAttribute('aria-valuenow', '60')
    expect(progress.firstElementChild).toHaveStyle({ width: '60%' })

    const badge = screen.getByText('60%')
    expect(badge.parentElement).toHaveClass('rounded-full')

    expect(container.querySelector('img')).toHaveAttribute('src', cause.image)
  })

  it('overlaps the hero with a negative top margin', () => {
    const { container } = render(<UpcomingCause />)
    expect(container.querySelector('section')?.className).toContain('-mt-32')
  })

  it('does not navigate when Donate Now is clicked', () => {
    render(<UpcomingCause />)
    fireEvent.click(screen.getByRole('link', { name: 'Donate Now' }))
    expect(window.location.hash).toBe('')
  })
})
