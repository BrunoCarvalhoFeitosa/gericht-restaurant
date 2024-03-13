import dynamic from "next/dynamic"

export const DynamicMap = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
  ssr: false
})

export const DynamicTileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
  ssr: false
})

export const DynamicMarker = dynamic(() => import("react-leaflet").then((module) => module.Marker), {
  ssr: false
})

export const DynamicPopup = dynamic(() => import("react-leaflet").then((module) => module.Popup), {
  ssr: false
})