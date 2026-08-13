import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServicesCarousel } from './ServicesCarousel'
import { describe, expect, it } from 'vitest'

describe('ServicesCarousel', () => {
  it('renders five slides with the first visible', () => {
    render(<ServicesCarousel />)
    const slideHeadings = screen.getAllByRole('heading', { level: 3, hidden: true })
    expect(slideHeadings).toHaveLength(5)
    expect(screen.getByRole('heading', { level: 3, name: 'Storage' })).toBeInTheDocument()
    const first = screen.getByRole('heading', { level: 3, name: 'Storage' }).closest('figure')!
    expect(first).toHaveAttribute('aria-hidden', 'false')
  })

  it('advances and rewinds with the arrow controls', async () => {
    const user = userEvent.setup()
    render(<ServicesCarousel />)
    const next = screen.getByRole('button', { name: 'Next slide' })
    const prev = screen.getByRole('button', { name: 'Previous slide' })
    expect(prev).toBeDisabled()
    await user.click(next)
    const second = screen
      .getByRole('heading', { level: 3, name: 'Air Transports' })
      .closest('figure')!
    expect(second).toHaveAttribute('aria-hidden', 'false')
    await user.click(prev)
    const first = screen.getByRole('heading', { level: 3, name: 'Storage' }).closest('figure')!
    expect(first).toHaveAttribute('aria-hidden', 'false')
  })
})
