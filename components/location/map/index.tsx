import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/location/leaflet-map"), {
  ssr: false
})

export default Map