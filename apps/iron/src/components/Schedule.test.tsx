import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the schedule heading and table', () => {
    render(<Schedule />)
    expect(
      screen.getByRole('heading', { level: 2, name: /schedule your fitness/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Fitness Aero')).toBeInTheDocument()
    expect(screen.getByText('Senior Fitness')).toBeInTheDocument()
    expect(screen.getByText('mon', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('fri', { exact: false })).toBeInTheDocument()
  })
})
