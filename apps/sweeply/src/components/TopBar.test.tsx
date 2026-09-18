import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { describe, expect, it } from 'vitest'

describe('TopBar', () => {
  it('renders email and phone', () => {
    render(<TopBar />)
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
    expect(screen.getByText('1-1234-012-1234')).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<TopBar />)
    expect(screen.getByText(/Mon - Sat/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })
})
