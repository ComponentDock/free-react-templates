import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and price', () => {
    render(<Hero />)
    expect(screen.getByText('3 Modern homes for modern thinking people.')).toBeInTheDocument()
    expect(screen.getByText('$145,000')).toBeInTheDocument()
  })

  it('renders bedroom info and availability', () => {
    render(<Hero />)
    expect(screen.getByText('3 bedrooms version')).toBeInTheDocument()
    expect(screen.getByText('Available from March 2019')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Modern home exterior')
    expect(img).toBeInTheDocument()
  })
})
