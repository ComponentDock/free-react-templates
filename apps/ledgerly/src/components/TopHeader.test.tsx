import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopHeader } from './TopHeader'

describe('TopHeader', () => {
  it('renders welcome text with Ledgerly name', () => {
    render(<TopHeader />)
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument()
    expect(screen.getByText('Ledgerly')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<TopHeader />)
    expect(screen.getByRole('link', { name: 'Login | Register' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Earn Money' })).toBeInTheDocument()
  })
})
