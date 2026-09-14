import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('BULWARK')).toBeInTheDocument()
    expect(screen.getByText('Protecting Your Digital Future')).toBeInTheDocument()
    expect(screen.getByText('Our Offered Services')).toBeInTheDocument()
    expect(screen.getByText('Some Features that Made us Unique')).toBeInTheDocument()
    expect(screen.getByText('Latest From Our Gallery')).toBeInTheDocument()
    expect(screen.getByText('Latest From Our Blog')).toBeInTheDocument()
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })
})
