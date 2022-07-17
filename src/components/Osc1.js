import React from "react"

export default function Osc1({ changeFreq, freq }) {
  return (
    <input
      onChange={changeFreq}
      type='range'
      id='freq'
      min='20'
      max='5000'
      value={freq}
    />
  )
}
