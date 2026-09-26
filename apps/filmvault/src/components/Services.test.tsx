import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Creating Experiences/)
  })

  it('renders 4 service titles', () => {
    render(<Services />)
    expect(screen.getByText('Portrait Photography')).toBeInTheDocument()
    expect(screen.getByText('Landscape Photography')).toBeInTheDocument()
    expect(screen.getByText('Natural Light Sessions')).toBeInTheDocument()
    expect(screen.getByText('Adventure Shoots')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Services />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })
})
