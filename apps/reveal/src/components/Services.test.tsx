import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Services')
  })

  it('renders all 6 service titles', () => {
    render(<Services />)
    expect(screen.getByText('Digital Strategy')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('User Experience')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('WordPress Solutions')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })
})
