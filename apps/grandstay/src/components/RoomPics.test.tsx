import { render, screen } from '@testing-library/react'
import { RoomPics } from './RoomPics'
import { ROOM_PICS } from '../data'
import { describe, expect, it } from 'vitest'

describe('RoomPics', () => {
  it('renders four room images', () => {
    render(<RoomPics />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(ROOM_PICS.length)
  })

  it('has correct alt text for each image', () => {
    render(<RoomPics />)
    for (let i = 0; i < ROOM_PICS.length; i++) {
      expect(screen.getByAltText(`Room photo ${i + 1}`)).toHaveAttribute('src', ROOM_PICS[i])
    }
  })
})
