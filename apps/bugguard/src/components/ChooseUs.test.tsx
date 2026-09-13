import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders heading and description', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Why People Choose/)
    expect(screen.getByText(/over 50 years of experience/)).toBeInTheDocument()
  })

  it('renders Read More CTA', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('link', { name: /Read More/ })).toBeInTheDocument()
  })

  it('renders all 3 feature items', () => {
    render(<ChooseUs />)
    expect(screen.getByText('Comfortable Price')).toBeInTheDocument()
    expect(screen.getByText('Safe And Clean')).toBeInTheDocument()
    expect(screen.getByText('Friendly Customer Service')).toBeInTheDocument()
  })

  it('renders image', () => {
    render(<ChooseUs />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
