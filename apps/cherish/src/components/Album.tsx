import { TitleBlock } from './title-block'
import { ALBUM_BAND_PHOTO, ALBUM_EYEBROW, ALBUM_FRAMES, ALBUM_HEADING } from '../lib/site'
import {
  albumBandClass,
  albumClass,
  albumFrameClass,
  albumFramesClass,
  albumImageClass,
  sectionAnchorStyle,
} from '../lib/styles'

/** The album: the title band carries the section's own photograph, and the eight frames are pulled
 * up over it so the grid overlaps the picture it belongs to. */
export function Album() {
  return (
    <section id="portraits" data-testid="portraits" aria-labelledby="portraits-heading" className={albumClass}
      style={sectionAnchorStyle}
    >
      <div
        className={albumBandClass}
        style={{ backgroundImage: `url(${ALBUM_BAND_PHOTO})` }}
      >
        <TitleBlock
          eyebrow={ALBUM_EYEBROW}
          heading={ALBUM_HEADING}
          headingId="portraits-heading"
        />
      </div>

      <ul className={albumFramesClass}>
        {ALBUM_FRAMES.map((frame) => (
          <li key={frame.caption} className={albumFrameClass} data-testid="album-frame">
            <img
              src={frame.image}
              alt={frame.caption}
              title={frame.caption}
              className={albumImageClass}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
