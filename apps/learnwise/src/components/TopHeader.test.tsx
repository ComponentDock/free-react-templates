import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopHeader } from './TopHeader'

describe('TopHeader', () => {
  it('renders contact info', () => {
    render(<TopHeader />)
    expect(screen.getByText(/Phone:/)).toBeInTheDocument()
    expect(screen.getByText(/Email:/)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<TopHeader />)
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('target', '_blank')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('target', '_blank')
    expect(screen.getByLabelText('Twitter')).toHaveAttribute('target', '_blank')
  })

  it('renders Follow us label', () => {
    render(<TopHeader />)
    expect(screen.getByText('Follow us')).toBeInTheDocument()
  })
})
