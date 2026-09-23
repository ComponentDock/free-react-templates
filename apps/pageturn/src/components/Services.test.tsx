import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and 3 service cards', () => {
    render(<Services />)

    expect(screen.getByText('Services', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Marketing Goals')).toBeInTheDocument()
    expect(screen.getByText('Targeting Vision')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/Separate they live in Bookmarksgrove/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })
})
