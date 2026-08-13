import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Invite } from './Invite'

describe('Invite', () => {
  it('shows the invite kicker, couple heading, date, and venue', () => {
    render(<Invite />)
    expect(screen.getByText('Join us to celebrate the wedding day of')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Francisco & Laura/)
    expect(screen.getByText('Dec | 28 | 2019')).toBeInTheDocument()
    expect(screen.getByText('Which is celebration on')).toBeInTheDocument()
    expect(screen.getByText('Starting at 2:00 in the afternoon')).toBeInTheDocument()
    expect(screen.getByText('Saint John Paul Church in YorkNew.in')).toBeInTheDocument()
  })

  it('shows a photo alongside the invite text', () => {
    render(<Invite />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
