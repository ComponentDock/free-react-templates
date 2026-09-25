import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Here are some of my expertise')).toBeDefined()
  })

  it('renders all service cards', () => {
    render(<Services />)
    expect(screen.getByText('Innovative Ideas')).toBeDefined()
    expect(screen.getByText('Software')).toBeDefined()
    expect(screen.getByText('Application')).toBeDefined()
    expect(screen.getByText('Graphic Design')).toBeDefined()
    expect(screen.getByText('Branding')).toBeDefined()
    expect(screen.getByText('Web Development')).toBeDefined()
  })

  it('renders what i do label', () => {
    render(<Services />)
    expect(screen.getByText('What I do?')).toBeDefined()
  })
})
