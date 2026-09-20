import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Teachers } from './Teachers'

describe('Teachers', () => {
  it('renders heading and teacher cards', () => {
    render(<Teachers />)
    expect(screen.getByText('Our Teachers')).toBeInTheDocument()
    expect(screen.getByText('Benjamin Stone')).toBeInTheDocument()
    expect(screen.getByText('Katleen Stone')).toBeInTheDocument()
    expect(screen.getByText('Sadie White')).toBeInTheDocument()
  })

  it('shows teacher roles', () => {
    render(<Teachers />)
    const roles = screen.getAllByText('Physics Teacher')
    expect(roles.length).toBe(3)
  })
})
