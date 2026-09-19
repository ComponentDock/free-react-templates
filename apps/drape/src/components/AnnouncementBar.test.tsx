import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnnouncementBar } from './AnnouncementBar'

describe('AnnouncementBar', () => {
  it('renders the first promotional message', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText(/Free shipping on orders over \$100/)).toBeInTheDocument()
  })

  it('has a dark background', () => {
    render(<AnnouncementBar />)
    const bar = screen.getByText(/Free shipping/).parentElement!
    expect(bar).toHaveClass('bg-warm-900')
  })
})
