import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders section title', () => {
    render(<Schedule />)
    expect(screen.getByText(/event/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /event schedule/i })).toBeInTheDocument()
  })

  it('renders all event items', () => {
    render(<Schedule />)
    expect(screen.getByText('Opening Keynote')).toBeInTheDocument()
    expect(screen.getByText('Panel: AI in Business')).toBeInTheDocument()
    expect(screen.getByText('Workshop: Design Thinking')).toBeInTheDocument()
  })

  it('renders Download Schedule button', () => {
    render(<Schedule />)
    expect(screen.getByRole('link', { name: /download schedule/i })).toBeInTheDocument()
  })

  it('renders speaker names', () => {
    render(<Schedule />)
    expect(screen.getByText('Dr. Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Williams')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })
})
