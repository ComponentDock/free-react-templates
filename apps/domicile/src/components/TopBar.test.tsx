import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { describe, expect, it } from 'vitest'
describe('TopBar', () => {
  it('renders phone and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+2 102 3923 3922')).toBeInTheDocument()
    expect(screen.getByText('info@domain.com')).toBeInTheDocument()
  })
  it('renders social links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})
