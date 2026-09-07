import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReviewStep } from './ReviewStep'

describe('ReviewStep', () => {
  it('renders review label', () => {
    render(<ReviewStep />)
    expect(screen.getByText('Your Review')).toBeInTheDocument()
  })

  it('renders textarea with placeholder', () => {
    render(<ReviewStep />)
    expect(screen.getByPlaceholderText('Write your comment here')).toBeInTheDocument()
  })

  it('renders illustration image', () => {
    render(<ReviewStep />)
    const img = screen.getByAltText('Review illustration')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
