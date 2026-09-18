import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders section heading', () => {
    render(<Experience />)
    expect(screen.getByText(/We Are Experience in Construction/)).toBeInTheDocument()
  })

  it('renders years counter', () => {
    render(<Experience />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText(/Years of Experience/)).toBeInTheDocument()
  })

  it('renders experience image', () => {
    render(<Experience />)
    expect(screen.getByRole('img', { name: /construction experience/i })).toBeInTheDocument()
  })

  it('renders Contact us button', () => {
    render(<Experience />)
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument()
  })
})
