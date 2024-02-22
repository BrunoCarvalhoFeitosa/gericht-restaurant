"use client"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon, LatLngTuple } from "leaflet"
import { markers } from "@/utils/markers"

export const Footer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const customIcon = new Icon({
        iconUrl: "/images/marker.png",
        iconSize: [50, 50]
    })

    useEffect(() => {
        setIsLoading(true)
    }, [])

    if (!isLoading) {
        return null
    }

    return (
        <footer className="w-full">
            <div className="w-full leaflet-container overflow-hidden">
                <MapContainer
                    center={[48.86, 2.3522]}
                    zoom={10}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        className="map-tiles"
                    />
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.geoCode as LatLngTuple}
                            icon={customIcon}
                        >
                            <Popup>
                                {marker.popUp}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </footer>
    )
}