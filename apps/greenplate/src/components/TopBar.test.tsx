import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone, email, and delivery info', () => {
    render(<TopBar />)
    expect(screen.getByText('(001) 112 3567')).toBeInTheDocument()
    expect(screen.getByText('info@free-template.com')).toBeInTheDocument()
    expect(screen.getByText(/Free delivery for orders over \$100/)).toBeInTheDocument()
  })

  it('has a green background with white text', () => {
    render(<TopBar />)
    const topbar = screen.getByTestId('topbar')
    expect(topbar).toHaveClass('bg-brand', 'text-white')
  })
})
