import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutInfoBar } from './AboutInfoBar'

describe('AboutInfoBar', () => {
  it('renders the section', () => {
    render(<AboutInfoBar />)
    expect(screen.getByTestId('about-info-bar')).toBeInTheDocument()
  })

  it('renders all three info items', () => {
    render(<AboutInfoBar />)
    expect(screen.getByText('Design For')).toBeInTheDocument()
    expect(screen.getByText('Web & Mobile')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('alex@calypso.design')).toBeInTheDocument()
  })
})
