import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopCategories } from './TopCategories'

describe('TopCategories', () => {
  it('renders heading and categories', () => {
    render(<TopCategories />)
    expect(screen.getByText('Top Categories')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Multimedia')).toBeInTheDocument()
    expect(screen.getByText('Education & Training')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
  })

  it('shows open position counts', () => {
    render(<TopCategories />)
    expect(screen.getByText('Open position: 354')).toBeInTheDocument()
    expect(screen.getAllByText('Open position: 100').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Open position: 300')).toBeInTheDocument()
  })
})
