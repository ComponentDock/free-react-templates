import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProServices } from './ProServices'

describe('ProServices', () => {
  it('renders the heading and CTA button', () => {
    render(<ProServices />)
    expect(screen.getByText(/We will create modern and first class interior/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover More About Us/i })).toBeInTheDocument()
  })
})
