import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCards } from './ServiceCards'

describe('ServiceCards', () => {
  it('renders four service card titles', () => {
    render(<ServiceCards />)
    expect(screen.getByText('Acupuncture Therapy')).toBeInTheDocument()
    expect(screen.getByText('Holistic Therapy')).toBeInTheDocument()
    expect(screen.getByText('Reflexology')).toBeInTheDocument()
    expect(screen.getByText('Natural Healing')).toBeInTheDocument()
  })

  it('renders description text for each card', () => {
    render(<ServiceCards />)
    expect(screen.getByText(/Precision needle placement/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive body treatments/)).toBeInTheDocument()
    expect(screen.getByText(/Targeted pressure point/)).toBeInTheDocument()
    expect(screen.getByText(/Plant-based remedies/)).toBeInTheDocument()
  })
})
