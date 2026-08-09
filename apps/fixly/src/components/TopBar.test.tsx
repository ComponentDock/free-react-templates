import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders opening hours', () => {
    render(<TopBar />)
    expect(screen.getByText(/Monday - Friday 8:00AM-8:00PM/i)).toBeInTheDocument()
  })

  it('renders the phone link and location', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /Call Us: \+2 392 3929 210/i })).toHaveAttribute(
      'href',
      'tel:+23923929210',
    )
    expect(screen.getByText('Location')).toBeInTheDocument()
  })
})
