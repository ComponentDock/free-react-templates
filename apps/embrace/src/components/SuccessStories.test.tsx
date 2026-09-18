import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessStories } from './SuccessStories'

describe('SuccessStories', () => {
  it('renders section heading', () => {
    render(<SuccessStories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Success Stories')
  })

  it('renders description text', () => {
    render(<SuccessStories />)
    expect(screen.getByText(/Over the years, our charity/)).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<SuccessStories />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
