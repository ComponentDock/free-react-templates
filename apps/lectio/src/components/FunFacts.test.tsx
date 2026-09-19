import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('renders all 4 stat values', () => {
    render(<FunFacts />)
    expect(screen.getByText('2500')).toBeInTheDocument()
    expect(screen.getByText('14k')).toBeInTheDocument()
    expect(screen.getByText('129')).toBeInTheDocument()
    expect(screen.getByText('1490')).toBeInTheDocument()
  })

  it('renders all 4 stat labels', () => {
    render(<FunFacts />)
    expect(screen.getByText('Total Students')).toBeInTheDocument()
    expect(screen.getByText('Graduates')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<FunFacts />)
    const img = container.querySelector('img[aria-hidden="true"]') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('picsum.photos')
  })
})
