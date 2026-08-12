import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoBand } from './VideoBand'

describe('VideoBand', () => {
  it('uses a cover background photo and is offset from the left at desktop width', () => {
    render(<VideoBand />)

    const band = screen.getByRole('region', { name: 'Video' }).firstElementChild as HTMLElement
    expect(band).toHaveClass('bg-cover', 'bg-center', 'lg:ml-[20%]')
    expect(band.style.backgroundImage).toContain('picsum.photos/seed/axiom-video')
  })

  it('shows a centered circular play button in the play blue', () => {
    render(<VideoBand />)

    const play = screen.getByRole('link', { name: 'Play the agency video' })
    expect(play).toHaveAttribute('href', 'https://www.youtube.com/watch?v=BnTroF3vEqg')
    expect(play).toHaveClass('rounded-full', 'bg-play')
    expect(play.querySelector('svg')).not.toBeNull()
  })
})
