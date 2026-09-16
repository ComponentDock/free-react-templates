import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChurchServices } from './ChurchServices'

describe('ChurchServices', () => {
  it('renders the heading and all 6 service cards', () => {
    render(<ChurchServices />)
    expect(screen.getByRole('heading', { name: /our ministries/i })).toBeInTheDocument()
    for (const service of [
      'Daily Prayers',
      'Church Community',
      'Teaching',
      'Helpers',
      'Wedding',
      'Events',
    ]) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    }
  })

  it('renders descriptions for each service', () => {
    render(<ChurchServices />)
    expect(screen.getByText(/guided morning prayers/i)).toBeInTheDocument()
    expect(screen.getByText(/vibrant community/i)).toBeInTheDocument()
  })
})
