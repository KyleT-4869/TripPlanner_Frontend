import type { LatLngExpression } from "leaflet";

export interface RouteData {
    boundingBox: number[];
    steps: Step[];
    summary: Summary;
    geometry: Geometry;
}

export interface Step{
    distance: number;
    duration: number;
    type: number;
    instruction: string;
    way_point: number[];
}

export interface Summary {
    distance: number;
    duration: number;
}

export interface Geometry {
    type: string;
    coordinates: number[][];
}