import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders both service blocks', () => {
    render(<Services />)
    expect(screen.getByText('Land & Property')).toBeInTheDocument()
    expect(screen.getByText('Surface Mining')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Comprehensive land survey/)).toBeInTheDocument()
    expect(screen.getByText(/Advanced surface mining/)).toBeInTheDocument()
  })

  it('renders bullet lists with checkmarks', () => {
    render(<Services />)
    expect(screen.getByText('Accurate land surveys')).toBeInTheDocument()
    expect(screen.getByText('Open-pit extraction')).toBeInTheDocument()
  })
})
