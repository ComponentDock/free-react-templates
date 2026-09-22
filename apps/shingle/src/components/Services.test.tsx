import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all service buttons', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Best Services' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Skylights/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Waterproofing/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Industrial Roofing/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Residential Roofing/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Gutter Cleaning/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Commercial Roofing/ })).toBeInTheDocument()
  })

  it('shows Skylights details by default', () => {
    render(<Services />)
    expect(screen.getByText(/Bring natural light into your home/)).toBeInTheDocument()
    expect(screen.getByText('Energy-efficient glass options')).toBeInTheDocument()
  })

  it('switches to Waterproofing on click', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: /Waterproofing/ }))
    expect(screen.getByText(/Protect your property from water damage/)).toBeInTheDocument()
    expect(screen.getByText('Membrane waterproofing')).toBeInTheDocument()
  })

  it('has the section id services', () => {
    const { container } = render(<Services />)
    expect(container.querySelector('#services')).toBeInTheDocument()
  })
})
