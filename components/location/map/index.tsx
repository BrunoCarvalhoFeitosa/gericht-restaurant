"use client"
import { Fragment, useEffect, useState } from "react"
import { DynamicMap, DynamicTileLayer, DynamicMarker, DynamicPopup } from "@/components/location/leaflet-map"
import Leaflet, { LatLngTuple } from "leaflet"
import { markers } from "@/utils/markers"

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete Leaflet.Icon.Default.prototype._getIconUrl
Leaflet.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
})

export const Map = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsLoading(true)
        }
    }, [])

    if (!isLoading) {
        return null
    }

    return (
        <Fragment>
            {typeof window !== "undefined" && (
                <section className="w-full leaflet-container overflow-hidden">
                    <DynamicMap
                        center={[48.86, 2.3522]}
                        zoom={10}
                        scrollWheelZoom={false}
                    >
                        <DynamicTileLayer
                            attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            className="map-tiles"
                        />
                        {markers.map((marker, index) => (
                            <DynamicMarker
                                key={index}
                                position={marker.geoCode as LatLngTuple}
                            >
                                <DynamicPopup>{marker.popUp}</DynamicPopup>
                            </DynamicMarker>
                        ))}
                    </DynamicMap>
                </section>
            )}
        </Fragment>
    )
}