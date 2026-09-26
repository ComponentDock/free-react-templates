import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Milestones from './Milestones'

describe('Milestones', () => {
  it('renders all 4 stat values', () => {
    render(<Milestones />)
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('23K')).toBeInTheDocument()
    expect(screen.getByText('19')).toBeInTheDocument()
  })

  it('renders all 4 stat labels', () => {
    render(<Milestones />)
    expect(screen.getByText('Video Games')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('Pictures Taken')).toBeInTheDocument()
    expect(screen.getByText('Video Tutorials')).toBeInTheDocument()
  })
})
