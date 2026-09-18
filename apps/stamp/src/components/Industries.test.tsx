import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Industries } from './Industries'

describe('Industries', () => {
  it('renders 3 industry cards', () => {
    render(<Industries />)
    expect(screen.getByText('Mechanical Engineering')).toBeInTheDocument()
    expect(screen.getByText('Chemical Research')).toBeInTheDocument()
    expect(screen.getByText('Industrial Construction')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Industries />)
    expect(screen.getByText('Our Industries Served')).toBeInTheDocument()
  })

  it('renders images with correct alt text', () => {
    render(<Industries />)
    expect(screen.getByAltText('Mechanical Engineering')).toBeInTheDocument()
    expect(screen.getByAltText('Chemical Research')).toBeInTheDocument()
    expect(screen.getByAltText('Industrial Construction')).toBeInTheDocument()
  })
})
