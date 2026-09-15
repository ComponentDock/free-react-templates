import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact information', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (454) 556-5656')).toBeInTheDocument()
    expect(screen.getByText('Yourmail@gmail.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Skype')).toBeInTheDocument()
  })
})
