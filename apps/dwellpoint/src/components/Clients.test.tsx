import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders section heading', () => {
    render(<Clients />)
    expect(screen.getByText('Reliable Customers')).toBeInTheDocument()
  })

  it('renders five client logos', () => {
    render(<Clients />)
    const images = screen.getAllByRole('img')
    const clientImages = images.filter((img) => img.getAttribute('src')?.includes('dwellpoint-l'))
    expect(clientImages).toHaveLength(5)
  })

  it('renders alt text for each client', () => {
    render(<Clients />)
    expect(screen.getByAltText('Client 1')).toBeInTheDocument()
    expect(screen.getByAltText('Client 5')).toBeInTheDocument()
  })
})
