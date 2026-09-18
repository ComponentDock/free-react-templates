import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders destination links', () => {
    render(<TopBar />)
    expect(screen.getByText('Top destinations')).toBeInTheDocument()
    expect(screen.getByText('Asia')).toBeInTheDocument()
    expect(screen.getByText('Europe')).toBeInTheDocument()
    expect(screen.getByText('America')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 555 234 5678')).toBeInTheDocument()
  })

  it('renders social icons with labels', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
