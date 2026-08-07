import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Milestones } from './Milestones'

describe('Milestones', () => {
  it('renders the four milestone stats', () => {
    render(<Milestones />)

    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('237')).toBeInTheDocument()
    expect(screen.getByText('11k')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText(/Years of Experience/)).toBeInTheDocument()
    expect(screen.getByText(/Projects Taken/)).toBeInTheDocument()
    expect(screen.getByText(/Twitter Followers/)).toBeInTheDocument()
    expect(screen.getByText(/Awards Won/)).toBeInTheDocument()
  })
})
