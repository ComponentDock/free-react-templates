import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutInfo } from './AboutInfo'

describe('AboutInfo', () => {
  it('renders design for info', () => {
    render(<AboutInfo />)
    expect(screen.getByText('Design For')).toBeInTheDocument()
    expect(screen.getByText('Web & Mobile')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<AboutInfo />)
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+10 (67) 367-9034')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<AboutInfo />)
    expect(screen.getByText('Drop your Message')).toBeInTheDocument()
    expect(screen.getByText('alex@pixelate.dev')).toBeInTheDocument()
  })
})
