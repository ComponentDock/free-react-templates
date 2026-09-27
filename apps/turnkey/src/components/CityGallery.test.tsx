import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CityGallery } from './CityGallery'

describe('CityGallery', () => {
  it('renders the section heading', () => {
    render(<CityGallery />)
    expect(screen.getByText(/find home in your city/i)).toBeInTheDocument()
  })

  it('renders city images', () => {
    render(<CityGallery />)
    expect(screen.getByAltText(/san francisco properties/i)).toBeInTheDocument()
    expect(screen.getByAltText(/new york properties/i)).toBeInTheDocument()
    expect(screen.getByAltText(/boston properties/i)).toBeInTheDocument()
    expect(screen.getByAltText(/los angeles properties/i)).toBeInTheDocument()
  })
})
