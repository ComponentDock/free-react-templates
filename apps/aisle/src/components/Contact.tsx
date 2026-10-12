import { MapPin } from 'lucide-react'
import {
  CONTACT_ADDRESS,
  CONTACT_DATE,
  CONTACT_INVITE,
  CONTACT_MAP_LABEL,
  CONTACT_MAP_NOTE,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_TITLE,
  SECTION_IDS,
} from '../lib/site'
import {
  containerClass,
  contactAddressClass,
  contactDateClass,
  contactInviteClass,
  contactPhoneClass,
  contactSectionClass,
  contactTitleClass,
  contactWrapperClass,
  mapAreaClass,
  mapCanvasClass,
  mapFrameClass,
  mapNoteClass,
  mapPinClass,
  mapRoadClass,
} from '../lib/styles'

/**
 * The design's 50/50 split under its heavy shadow: the copy on the left, with the rose telephone
 * link at 32px, and the venue panel on the right. The reference fills that panel with a Google Maps
 * embed behind its own API key and rendered an empty shell; this one draws its own static map and
 * prints the address beside the pin, so no third-party script is loaded at all.
 */
export function Contact() {
  return (
    <section id={SECTION_IDS.contact} className={contactSectionClass}>
      <div className={contactWrapperClass}>
        <div className={containerClass}>
          <h3 className={contactTitleClass}>{CONTACT_TITLE}</h3>
          <p className={contactDateClass}>{CONTACT_DATE}</p>
          <p className={contactInviteClass}>{CONTACT_INVITE}</p>
          <a href={CONTACT_PHONE_HREF} className={contactPhoneClass}>
            {CONTACT_PHONE}
          </a>
          <p className={contactAddressClass}>{CONTACT_ADDRESS}</p>
        </div>
      </div>

      <div className={mapAreaClass}>
        <div className={mapFrameClass} role="img" aria-label={CONTACT_MAP_LABEL}>
          <span className={mapCanvasClass} aria-hidden="true" />
          <svg
            className={mapRoadClass}
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth={5}
            aria-hidden="true"
          >
            <path d="M-10 214 L410 150" />
            <path d="M124 -10 L196 310" />
            <path d="M-10 62 L410 26" />
            <path d="M286 310 L318 -10" />
          </svg>
        </div>
        <p className={mapNoteClass}>
          <MapPin className={mapPinClass} aria-hidden="true" />
          {CONTACT_MAP_NOTE}
        </p>
      </div>
    </section>
  )
}
