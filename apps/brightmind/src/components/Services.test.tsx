import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Admission' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Notice Board' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Scholarship' })).toBeInTheDocument()
  })
})
