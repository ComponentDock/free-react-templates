import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesCompact } from './ServicesCompact'

describe('ServicesCompact', () => {
  it('renders three compact service cards', () => {
    render(<ServicesCompact />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Digital Solutions')).toBeInTheDocument()
  })
})
