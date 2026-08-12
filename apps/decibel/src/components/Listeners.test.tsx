import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Listeners } from './Listeners'

describe('Listeners', () => {
  it('shows the heading and the first testimonial card', () => {
    render(<Listeners />)
    expect(screen.getByRole('heading', { name: 'Love By Our Listeners' })).toBeInTheDocument()
    expect(screen.getByText('Megan Smith')).toBeInTheDocument()
    expect(screen.getByText(/Decibel keeps my whole week moving/i)).toBeInTheDocument()
  })

  it('cycles testimonials via the dot controls', async () => {
    const user = userEvent.setup()
    render(<Listeners />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial from Sara Chen' }))
    expect(screen.getByText('Sara Chen')).toBeInTheDocument()
    expect(screen.getByText(/Clean sound, honest playlists/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial from Sara Chen' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
