import { ROOM_PICS } from '../data'

/** RoomPics — full-width row of 4 room images. */
export function RoomPics() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {ROOM_PICS.map((src, i) => (
        <img key={i} src={src} alt={`Room photo ${i + 1}`} className="h-48 w-full object-cover" />
      ))}
    </section>
  )
}
