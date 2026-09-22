import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessStories } from './SuccessStories'

describe('SuccessStories', () => {
  it('renders heading', () => {
    render(<SuccessStories />)
    expect(screen.getByText('Successful Stories')).toBeInTheDocument()
    expect(screen.getByText('Stories')).toBeInTheDocument()
  })

  it('renders 3 story cards', () => {
    render(<SuccessStories />)
    expect(screen.getByText('Joy Smith')).toBeInTheDocument()
    expect(screen.getByText('Rony Smith')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders story roles', () => {
    render(<SuccessStories />)
    expect(screen.getByText('Client/Manager')).toBeInTheDocument()
    expect(screen.getByText('Client/Entrepreneur')).toBeInTheDocument()
    expect(screen.getByText('Client')).toBeInTheDocument()
  })
})
