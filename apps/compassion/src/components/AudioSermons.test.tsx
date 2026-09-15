import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AudioSermons } from './AudioSermons'

describe('AudioSermons', () => {
  it('displays section heading', () => {
    render(<AudioSermons />)
    expect(screen.getByRole('heading', { level: 2, name: 'Audio Sermons' })).toBeInTheDocument()
  })

  it('renders 3 sermon cards', () => {
    render(<AudioSermons />)
    expect(screen.getByText('Arise, Shine')).toBeInTheDocument()
    expect(screen.getByText('Walking in Grace')).toBeInTheDocument()
    expect(screen.getByText('The Power of Prayer')).toBeInTheDocument()
  })

  it('displays sermon metadata', () => {
    render(<AudioSermons />)
    expect(screen.getByText(/by Luis Matthew on March 28, 2018/)).toBeInTheDocument()
    expect(screen.getByText(/by David Chen on April 4, 2018/)).toBeInTheDocument()
    expect(screen.getByText(/by Sarah Williams on April 11, 2018/)).toBeInTheDocument()
  })

  it('renders audio players', () => {
    render(<AudioSermons />)
    const audioElements = document.querySelectorAll('audio')
    expect(audioElements).toHaveLength(3)
  })

  it('has sermon images with alt text', () => {
    render(<AudioSermons />)
    expect(screen.getByRole('img', { name: 'Arise, Shine' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Walking in Grace' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'The Power of Prayer' })).toBeInTheDocument()
  })
})
