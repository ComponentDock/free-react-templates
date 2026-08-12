import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SplitFeatures } from './SplitFeatures'

describe('SplitFeatures', () => {
  it('renders the "Choose the best service" section with a bullet list, image and button', () => {
    const { container } = render(<SplitFeatures />)
    expect(screen.getByRole('heading', { name: 'Choose the best service' })).toBeInTheDocument()
    expect(screen.getByText(/Sed efficitur diam ut interdum ultricies/)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'order plan' })).toHaveLength(2)
  })

  it('renders the "The best servers" section with three numbered items (01., 02., 03.)', () => {
    render(<SplitFeatures />)
    expect(screen.getByRole('heading', { name: 'The best servers' })).toBeInTheDocument()
    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
    expect(screen.getByText('03.')).toBeInTheDocument()
    expect(screen.getAllByText(/Mauris velit arcu/).length).toBeGreaterThanOrEqual(1)
  })
})
