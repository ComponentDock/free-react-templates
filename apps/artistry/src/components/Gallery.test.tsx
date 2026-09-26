import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('displays the section title My Works', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'My Works' })).toBeInTheDocument()
  })

  it('displays 4 portfolio items', () => {
    render(<Gallery />)
    expect(screen.getByText('Food Delivery App')).toBeInTheDocument()
    expect(screen.getByText('Corporate Website')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Online Store')).toBeInTheDocument()
  })

  it('displays category tags for each item', () => {
    render(<Gallery />)
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('E-commerce')).toBeInTheDocument()
  })

  it('displays a More Works outlined button', () => {
    render(<Gallery />)
    const btn = screen.getByRole('link', { name: /More Works/i })
    expect(btn).toBeInTheDocument()
  })

  it('renders portfolio images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })
})
