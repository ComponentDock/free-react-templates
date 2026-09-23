import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LegalPractice } from './LegalPractice'

describe('LegalPractice', () => {
  it('renders the section heading', () => {
    render(<LegalPractice />)
    expect(screen.getByRole('heading', { name: /legal practice area/i })).toBeInTheDocument()
  })

  it('renders three practice cards', () => {
    render(<LegalPractice />)
    expect(screen.getByRole('heading', { name: 'Vehicle Accident' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Health Law' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Insurance Law' })).toBeInTheDocument()
  })

  it('renders descriptions for each practice', () => {
    render(<LegalPractice />)
    expect(screen.getByText(/expert legal representation/i)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive health law/i)).toBeInTheDocument()
    expect(screen.getByText(/skilled navigation of insurance/i)).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<LegalPractice />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
