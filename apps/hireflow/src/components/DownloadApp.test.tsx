import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DownloadApp } from './DownloadApp'

describe('DownloadApp', () => {
  it('renders the download headline', () => {
    render(<DownloadApp />)
    expect(screen.getByText(/Download the/)).toBeInTheDocument()
    expect(screen.getByText(/HireFlow App Today!/)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<DownloadApp />)
    expect(screen.getByText(/Never miss a job opportunity/)).toBeInTheDocument()
  })

  it('renders store download buttons', () => {
    render(<DownloadApp />)
    expect(screen.getByLabelText('Download on App Store')).toBeInTheDocument()
    expect(screen.getByLabelText('Download on Play Store')).toBeInTheDocument()
  })

  it('renders the phone preview image', () => {
    render(<DownloadApp />)
    expect(screen.getByAltText('HireFlow mobile app preview')).toBeInTheDocument()
  })
})
