import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DiningSection } from './DiningSection'

describe('DiningSection', () => {
  it('renders the dining section with heading', () => {
    render(<DiningSection />)
    expect(screen.getByTestId('dining-section')).toBeInTheDocument()
    expect(screen.getByText('Delicious Food')).toBeInTheDocument()
    expect(screen.getByText('We Serve Fresh and Delicious Food')).toBeInTheDocument()
  })

  it('renders learn more link', () => {
    render(<DiningSection />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders dining images', () => {
    render(<DiningSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
