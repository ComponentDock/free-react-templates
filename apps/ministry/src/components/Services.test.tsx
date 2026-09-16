import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Worship')).toBeInTheDocument()
    expect(screen.getByText('Connect')).toBeInTheDocument()
    expect(screen.getByText("God's Love")).toBeInTheDocument()
  })

  it('renders subheadings', () => {
    render(<Services />)
    expect(screen.getByText('What to expect')).toBeInTheDocument()
    expect(screen.getByText('Contact Members')).toBeInTheDocument()
    expect(screen.getByText('Beliefs and History')).toBeInTheDocument()
  })

  it('renders the quote block', () => {
    render(<Services />)
    expect(screen.getByText(/A Christian should live for the glory of God/)).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/far from the countries/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
