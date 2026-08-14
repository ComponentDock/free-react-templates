import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Awards } from './Awards'

describe('Awards', () => {
  it('renders the heading, paragraph, GET START button and six award cards', () => {
    render(<Awards />)
    expect(
      screen.getByRole('heading', { name: 'Take a look at our achivment' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Start' })).toBeInTheDocument()
    expect(screen.getAllByText('Behance award').length).toBe(6)
    expect(screen.getAllByText('Prize 2019').length).toBe(6)
    expect(screen.getAllByText('Behance award')[0]!.className).toContain('uppercase')
  })

  it('renders a trophy icon in every award card', () => {
    render(<Awards />)
    expect(document.querySelectorAll('svg.lucide-trophy').length).toBe(6)
  })
})
