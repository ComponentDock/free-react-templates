import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title and description', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Program' })).toBeInTheDocument()
    expect(screen.getByText(/fitness experts can help you discover/)).toBeInTheDocument()
  })

  it('lists all 4 service items with icons and descriptions', () => {
    render(<Services />)

    for (const title of ['Weight Lifting', 'Body Building', 'Healthy', 'Yoga']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    const descriptions = screen.getAllByText(/great complement to any training/)
    expect(descriptions).toHaveLength(4)
  })

  it('renders a video thumbnail with play button', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: /gym training/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
