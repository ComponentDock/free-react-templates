import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows the phone number and a Book Now link', () => {
    render(<TopBar />)
    expect(screen.getByText('+880 1234 654 953')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#contact')
  })
})
