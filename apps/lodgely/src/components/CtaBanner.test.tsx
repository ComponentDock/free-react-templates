import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the reserve heading', () => {
    render(<CtaBanner />)

    expect(screen.getByText(/A Best Place To Stay/)).toBeInTheDocument()
    expect(screen.getByText(/Reserve Now!/)).toBeInTheDocument()
  })

  it('renders the Reserve Now link', () => {
    render(<CtaBanner />)

    expect(screen.getByRole('link', { name: 'Reserve Now' })).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<CtaBanner />)

    const bgDiv = container.querySelector('[style*="picsum.photos"]')
    expect(bgDiv).toBeTruthy()
  })
})
