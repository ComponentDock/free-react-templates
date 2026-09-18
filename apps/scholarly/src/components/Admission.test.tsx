import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Admission } from './Admission'

describe('Admission', () => {
  it('renders the heading', () => {
    render(<Admission />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Apply for Admission')
  })

  it('renders the accent text', () => {
    render(<Admission />)
    expect(screen.getByText('Applications are now open')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Admission />)
    expect(screen.getByText(/Join our community/)).toBeInTheDocument()
  })

  it('renders the Apply Now button', () => {
    render(<Admission />)
    expect(screen.getByRole('button', { name: 'Apply Now' })).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<Admission />)
    expect(screen.getByAltText('Professor in classroom')).toBeInTheDocument()
  })

  it('has a dark navy right panel', () => {
    const { container } = render(<Admission />)
    const panels = container.querySelectorAll('div')
    const darkPanel = Array.from(panels).find((p) => p.className.includes('bg-navy-900'))
    expect(darkPanel).toBeDefined()
  })
})
