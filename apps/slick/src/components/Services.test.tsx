import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards with titles and copy', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Stylish hair cut' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cut & hair style' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Color & hair wash' })).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph').length).toBe(3)
  })
})
