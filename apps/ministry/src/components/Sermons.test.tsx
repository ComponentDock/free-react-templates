import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('renders section heading', () => {
    render(<Sermons />)
    expect(screen.getByText('Our Sermons')).toBeInTheDocument()
    expect(screen.getByText('Watch and Listen to our Sermons')).toBeInTheDocument()
  })

  it('renders three sermon cards', () => {
    render(<Sermons />)
    const titles = screen.getAllByText(
      /God Wants To Do A New Thing|Walking In Faith|The Power of Prayer/,
    )
    expect(titles.length).toBe(3)
  })

  it('renders speaker names', () => {
    render(<Sermons />)
    expect(screen.getByText('Dr. Rolando Henderson')).toBeInTheDocument()
    expect(screen.getByText('Pastor James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Rev. Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders Watch and Download buttons', () => {
    render(<Sermons />)
    const watchBtns = screen.getAllByText('Watch Sermons')
    const downloadBtns = screen.getAllByText('Download Sermons')
    expect(watchBtns.length).toBe(3)
    expect(downloadBtns.length).toBe(3)
  })

  it('renders sermon images', () => {
    render(<Sermons />)
    const imgs = screen.getAllByRole('img') as HTMLImageElement[]
    const sermonImgs = imgs.filter((img) => img.alt.includes('sermon image'))
    expect(sermonImgs.length).toBe(3)
  })
})
