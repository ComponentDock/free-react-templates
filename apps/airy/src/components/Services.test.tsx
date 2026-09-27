import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)

    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
  })
})
