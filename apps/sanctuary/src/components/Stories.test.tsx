import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stories } from './Stories'

describe('Stories', () => {
  it('shows the Stories of Faith heading and intro', () => {
    render(<Stories />)

    expect(screen.getByRole('heading', { level: 2, name: /Stories of Faith/ })).toBeInTheDocument()
    expect(screen.getByText(/Hear from members of our church family/)).toBeInTheDocument()
  })

  it('shows three testimonials with round avatars', () => {
    render(<Stories />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'The Martinez Family' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Michael Chen' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Jennifer Wilson' })).toBeInTheDocument()

    expect(screen.getByText(/church has become our family/i)).toBeInTheDocument()
    expect(screen.getByText(/I was skeptical about church/)).toBeInTheDocument()
    expect(screen.getByText(/I've found true community and lifelong friends/)).toBeInTheDocument()

    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
    for (const avatar of avatars) {
      expect(avatar).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
