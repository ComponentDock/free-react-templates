import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopHeader } from './TopHeader'

describe('TopHeader', () => {
  it('renders contact info on the left', () => {
    render(<TopHeader />)
    expect(screen.getByText(/\+1 \(234\) 567 890/)).toBeInTheDocument()
    expect(screen.getByText(/shop@joule.com/)).toBeInTheDocument()
    expect(screen.getByText(/123 Commerce St, New York/)).toBeInTheDocument()
  })

  it('renders account links on the right', () => {
    render(<TopHeader />)
    expect(screen.getByText('USD $')).toBeInTheDocument()
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })

  it('has dark background', () => {
    const { container } = render(<TopHeader />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('bg-darker-bg')
  })
})
