# Branding Iframes - Compresion No Confinada

Documento de referencia para mantener consistente el branding del microfrontend de **Compresion No Confinada** y su visualizacion embebida en iframe dentro del CRM.

## Alcance

- Microfrontend: `compresion-no-confinada-crm`
- Shell embebedor: `crm-geofal` modulo Compresion No Confinada
- Flujo: CRM abre `https://comp.noconfinada.geofal.com.pe` en dialog modal con `token` y opcionalmente `ensayo_id`

## Reglas visuales

- Mantener estructura de hoja tecnica fiel a la plantilla oficial del laboratorio.
- Mantener consistencia visual con modulos recientes de laboratorio.
- Botonera final con acciones `Guardar` y `Guardar y Descargar`.

## Contrato iframe

- Entrada por query params: `token`, `ensayo_id`.
- Mensajes hijo -> padre: `TOKEN_REFRESH_REQUEST`, `CLOSE_MODAL`.
- Mensaje padre -> hijo: `TOKEN_REFRESH`.
