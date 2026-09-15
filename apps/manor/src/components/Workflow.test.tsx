import { render, screen } from '@testing-library/react'
import { Workflow } from './Workflow'
import { describe, it, expect } from 'vitest'

describe('Workflow', () => {
  it('renders section heading', () => {
    render(<Workflow />)
    expect(screen.getByRole('heading', { name: 'see how we operate' })).toBeInTheDocument()
    expect(screen.getByText('What you need to do')).toBeInTheDocument()
  })

  it('renders all 3 workflow steps', () => {
    render(<Workflow />)
    expect(screen.getByText('Choose a Location')).toBeInTheDocument()
    expect(screen.getByText('Find the Perfect Home')).toBeInTheDocument()
    expect(screen.getByText('Move in your new life')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<Workflow />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
