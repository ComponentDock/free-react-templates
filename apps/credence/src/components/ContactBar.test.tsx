import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactBar } from './ContactBar'

describe('ContactBar', () => {
  it('renders address, phone, and email information', () => {
    render(<ContactBar />)
    expect(screen.getByText('3008 Sarah Drive')).toBeInTheDocument()
    expect(screen.getByText('FrankinLA 70538')).toBeInTheDocument()
    expect(screen.getByText('337-4139539')).toBeInTheDocument()
    expect(screen.getByText('MIN - FRI,8AM - 7PM')).toBeInTheDocument()
    expect(screen.getByText('contact@credence.com')).toBeInTheDocument()
    expect(screen.getByText('REPLY IN 24 HOURS')).toBeInTheDocument()
  })

  it('renders icons for each contact item', () => {
    const { container } = render(<ContactBar />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(3)
  })
})
