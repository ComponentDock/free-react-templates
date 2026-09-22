import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrainingCategories } from './TrainingCategories'

describe('TrainingCategories', () => {
  it('renders two category cards', () => {
    render(<TrainingCategories />)
    expect(screen.getByText('Personal Training')).toBeInTheDocument()
    expect(screen.getByText('Group Training')).toBeInTheDocument()
  })

  it('renders View Courses buttons for each category', () => {
    render(<TrainingCategories />)
    const buttons = screen.getAllByRole('link', { name: /view courses/i })
    expect(buttons).toHaveLength(2)
  })

  it('renders category images', () => {
    render(<TrainingCategories />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(2)
  })
})
