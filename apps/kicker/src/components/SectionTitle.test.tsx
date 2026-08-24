import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the title text', () => {
    render(<SectionTitle title="Test Section" />)
    expect(screen.getByText('Test Section')).toBeInTheDocument()
  })

  it('renders the See All link', () => {
    render(<SectionTitle title="Test Section" />)
    expect(screen.getByText('See All')).toBeInTheDocument()
  })

  it('applies dark styles when dark prop is true', () => {
    render(<SectionTitle title="Dark Section" dark />)
    const heading = screen.getByText('Dark Section')
    expect(heading).toHaveClass('text-white')
  })

  it('applies default (light) styles when dark prop is false', () => {
    render(<SectionTitle title="Light Section" />)
    const heading = screen.getByText('Light Section')
    expect(heading).toHaveClass('text-ink')
  })
})
