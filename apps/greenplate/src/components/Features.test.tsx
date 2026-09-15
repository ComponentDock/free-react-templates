import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders 4 feature cards', () => {
    render(<Features />)
    const titles = ['Free Shipping', 'Always Fresh', 'Superior Quality', 'Support 24/7']
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders each feature with a title and description', () => {
    render(<Features />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText(/Free shipping on orders over \$100/)).toBeInTheDocument()
    expect(screen.getByText('Always Fresh')).toBeInTheDocument()
    expect(screen.getByText('Superior Quality')).toBeInTheDocument()
    expect(screen.getByText('Support 24/7')).toBeInTheDocument()
  })
})
