import { render, screen } from '@testing-library/react'
import { Works } from './Works'
import { describe, expect, it } from 'vitest'

describe('Works', () => {
  it('renders section heading', () => {
    render(<Works />)
    expect(screen.getByText('Featured projects')).toBeInTheDocument()
  })

  it('renders 6 project cards', () => {
    render(<Works />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(6)
  })

  it('renders project titles', () => {
    render(<Works />)
    expect(screen.getByText('Brand Identity System')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Redesign')).toBeInTheDocument()
    expect(screen.getByText('Mobile Banking App')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Works />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})
