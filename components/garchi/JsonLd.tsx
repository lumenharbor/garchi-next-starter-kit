import React from 'react'

type Props = {
    jsonLd?: string
}

export default function JsonLd({jsonLd}: Props) {

  if(!jsonLd) return <></>

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
  )
}