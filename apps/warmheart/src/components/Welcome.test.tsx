import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the heading', () => {
    render(<Welcome />)
    expect(screen.getByText('Welcome to Warmheart')).toBeInTheDocument()
  })

  it('renders three stat cards', () => {
    render(<Welcome />)
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('1,465')).toBeInTheDocument()
    expect(screen.getByText('3,965')).toBeInTheDocument()
    expect(screen.getByText('Total Donation')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('Total Volunteers')).toBeInTheDocument()
  })
})
