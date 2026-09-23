import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders heading and all four practice areas', () => {
    render(<PracticeAreas />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Practice Areas')
    expect(screen.getByText('Banking and Finance Law')).toBeInTheDocument()
    expect(screen.getByText('Commercial Law')).toBeInTheDocument()
    expect(screen.getByText('Corporate Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
  })

  it('renders Learn More and More Practice Areas links', () => {
    render(<PracticeAreas />)

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More Practice Areas/ })).toBeInTheDocument()
  })
})
