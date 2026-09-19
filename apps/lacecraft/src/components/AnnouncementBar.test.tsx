import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnnouncementBar } from './AnnouncementBar'

describe('AnnouncementBar', () => {
  it('renders the free shipping message', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText(/Free shipping on orders over \$75/)).toBeInTheDocument()
  })

  it('displays the promo code', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText('LACE20')).toBeInTheDocument()
  })

  it('displays the discount percentage', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText(/20% off your first order/)).toBeInTheDocument()
  })

  it('renders as a div with gradient background', () => {
    render(<AnnouncementBar />)
    const bar = screen.getByText(/Free shipping/).closest('div')
    expect(bar).toHaveClass('bg-gradient-to-r')
  })
})
