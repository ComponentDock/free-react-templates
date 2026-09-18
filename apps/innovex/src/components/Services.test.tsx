import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading and 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('We Shape The Perfect Solutions')).toBeInTheDocument()
    const services = [
      'Digital Products',
      'Online Marketing',
      'Graphic Design',
      'App Development',
      'Web Development',
      'UX/UI Design',
    ]
    services.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders service description text', () => {
    render(<Services />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })
})
