export type CompresionNoConfinadaPayload = {
    muestra: string
    numero_ot: string
    fecha_ensayo: string
    realizado_por?: string
    tara_numero?: string
    tara_suelo_humedo_g?: number | null
    tara_suelo_seco_g?: number | null
    peso_agua_g?: number | null
    peso_tara_g?: number | null
    peso_suelo_seco_g?: number | null
    humedad_pct?: number | null
    diametro_cm?: Array<number | null>
    altura_cm?: Array<number | null>
    area_cm2?: Array<number | null>
    volumen_cm3?: Array<number | null>
    peso_gr?: Array<number | null>
    p_unitario_humedo?: Array<number | null>
    p_unitario_seco?: Array<number | null>
    deformacion_tiempo?: string[]
    deformacion_pulg_001?: number[]
    deformacion_mm?: number[]
    lectura_carga_kg?: Array<number | null>
    observaciones?: string
    revisado_por?: string
    revisado_fecha?: string
    aprobado_por?: string
    aprobado_fecha?: string
    [key: string]: unknown
}

export type EnsayoDetail = {
    id: number
    numero_ensayo?: string | null
    numero_ot?: string | null
    cliente?: string | null
    muestra?: string | null
    fecha_documento?: string | null
    estado?: string | null
    payload?: CompresionNoConfinadaPayload | null
}

export type SaveResponse = {
    id: number
    numero_ensayo: string
    numero_ot: string
    estado: string
}
