import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (168) 314 5016')).toBeInTheDocument()
    expect(screen.getByText('info@constructo.com')).toBeInTheDocument()
    expect(screen.getByText(/Mon - Sat/)).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
