import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByText('Services We Provides')).toBeInTheDocument()
  })

  it('renders all six service items', () => {
    render(<Services />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Online Marketing')).toBeInTheDocument()
    expect(screen.getByText('Digital Media')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })
})
