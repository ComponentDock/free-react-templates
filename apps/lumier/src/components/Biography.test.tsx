import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Biography } from './Biography'

describe('Biography', () => {
  it('renders the biography heading', () => {
    render(<Biography />)
    expect(screen.getByText('Biography')).toBeInTheDocument()
  })

  it('renders the photographer name', () => {
    render(<Biography />)
    expect(screen.getByText("Hi, I'm Jed")).toBeInTheDocument()
  })

  it('renders the experience heading', () => {
    render(<Biography />)
    expect(screen.getByText('Photographer for 10 years')).toBeInTheDocument()
  })

  it('renders skill check items', () => {
    render(<Biography />)
    expect(screen.getByText('Optio eveniet ex laborum')).toBeInTheDocument()
    expect(screen.getByText('Inventore sapiente tenetur')).toBeInTheDocument()
    expect(screen.getByText('Ipsam aliquam esse')).toBeInTheDocument()
    expect(screen.getByText('Voluptate qui reiciendis')).toBeInTheDocument()
  })
})
