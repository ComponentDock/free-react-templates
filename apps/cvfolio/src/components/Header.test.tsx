import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders contact information', () => {
    render(<Header />)

    expect(screen.getByText('123 Main St, New York, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('michel@example.com')).toBeInTheDocument()
  })

  it('renders a download CV button', () => {
    render(<Header />)

    const link = screen.getByRole('link', { name: /download cv/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('download')
  })
})
