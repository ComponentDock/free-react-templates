import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { SliderSection } from './SliderSection'

describe('SliderSection', () => {
  it('renders the section heading', () => {
    render(<SliderSection />)
    expect(screen.getByRole('heading', { level: 2, name: /explore our work/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<SliderSection />)
    expect(screen.getByText(/browse through our latest projects/i)).toBeInTheDocument()
  })

  it('renders all slider cards', () => {
    render(<SliderSection />)
    expect(screen.getByText('Website Redesign')).toBeInTheDocument()
    expect(screen.getByText('Mobile App UI')).toBeInTheDocument()
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Social Dashboard')).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<SliderSection />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('disables prev button at start', () => {
    render(<SliderSection />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled()
  })

  it('enables next button and advances on click', () => {
    render(<SliderSection />)
    const nextBtn = screen.getByRole('button', { name: 'Next' })
    expect(nextBtn).not.toBeDisabled()
    fireEvent.click(nextBtn)
  })

  it('disables next button at end', () => {
    render(<SliderSection />)
    const nextBtn = screen.getByRole('button', { name: 'Next' })
    fireEvent.click(nextBtn)
    expect(nextBtn).toBeDisabled()
  })

  it('re-enables prev button after advancing', () => {
    render(<SliderSection />)
    const prevBtn = screen.getByRole('button', { name: 'Previous' })
    expect(prevBtn).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(prevBtn).not.toBeDisabled()
  })

  it('goes back when prev is clicked after advancing', () => {
    render(<SliderSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    const prevBtn = screen.getByRole('button', { name: 'Previous' })
    expect(prevBtn).not.toBeDisabled()
    fireEvent.click(prevBtn)
    expect(prevBtn).toBeDisabled()
  })
})
