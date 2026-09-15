import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Process } from './Process'

describe('Process', () => {
  it('renders all 9 process items', () => {
    render(<Process />)
    expect(screen.getByText('Life Advice Looking Through')).toBeInTheDocument()
    expect(screen.getByText('Dealing With Technical')).toBeInTheDocument()
    expect(screen.getByText('What Is HDCP')).toBeInTheDocument()
    expect(screen.getByText('Finding Information Online')).toBeInTheDocument()
    expect(screen.getByText('Sony Laptops Are Still Part')).toBeInTheDocument()
    expect(screen.getByText('Purchase Desktop Computers')).toBeInTheDocument()
    expect(screen.getByText('The Best Photo Printer')).toBeInTheDocument()
    expect(screen.getByText('FTA Keys')).toBeInTheDocument()
    expect(screen.getByText('How Does An LCD Screen Work')).toBeInTheDocument()
  })
})
