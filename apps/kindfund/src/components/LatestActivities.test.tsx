import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestActivities } from './LatestActivities'

describe('LatestActivities', () => {
  it('renders the heading and description', () => {
    render(<LatestActivities />)
    expect(screen.getByText('Watch Our Latest Activities')).toBeInTheDocument()
    expect(screen.getByText(/See how your donations/)).toBeInTheDocument()
  })

  it('renders the Donate Now button', () => {
    render(<LatestActivities />)
    expect(screen.getByRole('link', { name: /donate now/i })).toHaveAttribute('href', '#causes')
  })
})
