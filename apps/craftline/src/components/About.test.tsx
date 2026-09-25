import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('Who Am I?')).toBeDefined()
  })

  it('renders about label', () => {
    render(<About />)
    expect(screen.getByText('About')).toBeDefined()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/Alex Morgan/)).toBeDefined()
  })

  it('renders service icons grid', () => {
    render(<About />)
    expect(screen.getByText('Graphic Design')).toBeDefined()
    expect(screen.getByText('Web Design')).toBeDefined()
    expect(screen.getByText('Software')).toBeDefined()
    expect(screen.getByText('Application')).toBeDefined()
  })

  it('renders hire me CTA', () => {
    render(<About />)
    expect(screen.getByText('Hire me')).toBeDefined()
  })

  it('renders 300+ projects text', () => {
    render(<About />)
    expect(screen.getByText(/300\+ projects done successfully/)).toBeDefined()
  })
})
