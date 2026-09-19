import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText(/top features that make us unique/i)).toBeInTheDocument()
  })

  it('renders all four feature items', () => {
    render(<Features />)
    expect(screen.getByText('High Performance')).toBeInTheDocument()
    expect(screen.getByText('Smart Design')).toBeInTheDocument()
    expect(screen.getByText('Built to Last')).toBeInTheDocument()
    expect(screen.getByText('Seamless Connect')).toBeInTheDocument()
  })

  it('renders the watch collection image', () => {
    render(<Features />)
    expect(screen.getByAltText('Smartwatch collection')).toBeInTheDocument()
  })
})
