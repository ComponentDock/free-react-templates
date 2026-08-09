import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AnnouncementBar } from './AnnouncementBar'

describe('AnnouncementBar', () => {
  it('renders the shipping promo with the promo code in bold on the brand background', () => {
    const { container } = render(<AnnouncementBar />)
    expect(screen.getByText(/Free shipping on orders over \$100/i)).toBeInTheDocument()
    const code = screen.getByText('LUXE20')
    expect(code.tagName).toBe('STRONG')
    expect(container.firstElementChild).toHaveClass('bg-primary-600')
    expect(container.firstElementChild).toHaveClass('text-white')
  })
})
