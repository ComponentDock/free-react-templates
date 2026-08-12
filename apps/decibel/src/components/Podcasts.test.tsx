import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Podcasts } from './Podcasts'

describe('Podcasts', () => {
  it('shows the heading and three distinct podcast cards', () => {
    render(<Podcasts />)
    expect(screen.getByRole('heading', { name: 'Featured Podcasts' })).toBeInTheDocument()

    for (const title of [
      'Classic Songs For Classic People',
      'Weekend Warm-Up Mix',
      'Late Night Sessions',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('Friday 1:00pm — 2:30pm')).toBeInTheDocument()
    expect(screen.getByText('Saturday 9:00am — 11:00am')).toBeInTheDocument()
    expect(screen.getByText('Sunday 11:00pm — 1:00am')).toBeInTheDocument()
  })
})
