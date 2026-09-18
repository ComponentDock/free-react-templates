import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the logo text', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /Shingle/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', '#')
  })
})
