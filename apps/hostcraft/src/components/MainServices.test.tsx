import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainServices } from './MainServices'

describe('MainServices', () => {
  it('renders heading and 4 service cards', () => {
    render(<MainServices />)
    expect(screen.getByText('Our Main Services')).toBeInTheDocument()
    expect(screen.getByText('Cloud VPS')).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
    expect(screen.getByText('VPS')).toBeInTheDocument()
    expect(screen.getByText('Dedicated')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<MainServices />)
    expect(screen.getByAltText('Services illustration')).toBeInTheDocument()
  })
})
