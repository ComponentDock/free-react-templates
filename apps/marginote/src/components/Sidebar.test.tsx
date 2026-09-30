import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('displays the brand name "Journal" as a heading', () => {
    render(<Sidebar isOpen />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Journal')
  })

  it('displays the tagline paragraph', () => {
    render(<Sidebar isOpen />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Sidebar isOpen />)
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders social media icons with accessible labels', () => {
    render(<Sidebar isOpen />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('is visible when isOpen is true', () => {
    render(<Sidebar isOpen />)
    const aside = screen.getByRole('complementary')
    expect(aside).toHaveClass('translate-x-0')
  })

  it('is hidden when isOpen is false', () => {
    render(<Sidebar isOpen={false} />)
    const aside = screen.getByRole('complementary')
    expect(aside).toHaveClass('-translate-x-full')
  })

  it('renders a background image', () => {
    const { container } = render(<Sidebar isOpen />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
